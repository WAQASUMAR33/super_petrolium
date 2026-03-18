<?php
/**
 * Contact Form Submission API
 * Handles contact form submissions and sends them via email
 */

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Use POST.']);
    exit();
}

// Configuration
$RECIPIENT_EMAIL = 'superpetroleum2021@gmail.com'; // Change to your email
$SUBJECT_PREFIX = 'Contact Form Inquiry - Super Petroleum';

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get JSON input or POST data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Get form data
$name = isset($input['name']) ? sanitize_input($input['name']) : '';
$email = isset($input['email']) ? sanitize_input($input['email']) : '';
$phone = isset($input['phone']) ? sanitize_input($input['phone']) : '';
$subject = isset($input['subject']) ? sanitize_input($input['subject']) : '';
$message = isset($input['message']) ? sanitize_input($input['message']) : '';

// Validate required fields
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!validate_email($email)) {
    $errors[] = 'Invalid email address';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit();
}

// Map subject codes to readable names
$subjectMap = [
    'general' => 'General Inquiry',
    'fuel-cards' => 'Fuel Card Program',
    'truck-care' => 'Truck Care Services',
    'locations' => 'Location Information',
    'careers' => 'Career Opportunities',
    'feedback' => 'Feedback',
    'other' => 'Other'
];

$subjectName = isset($subjectMap[$subject]) ? $subjectMap[$subject] : $subject;
$emailSubject = $SUBJECT_PREFIX . ' - ' . $subjectName;

// Prepare email
$boundary = md5(time());

// Email headers
$headers = "From: Super Petroleum Contact Form <noreply@superpetroleum.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email body
$emailBody = "<!DOCTYPE html>";
$emailBody .= "<html><head><style>";
$emailBody .= "body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }";
$emailBody .= ".container { max-width: 600px; margin: 0 auto; padding: 20px; }";
$emailBody .= ".header { background-color: #FFD10C; color: #000; padding: 20px; text-align: center; }";
$emailBody .= ".content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }";
$emailBody .= ".field { margin-bottom: 15px; }";
$emailBody .= ".label { font-weight: bold; color: #555; }";
$emailBody .= ".value { margin-top: 5px; padding: 10px; background-color: #fff; border-left: 3px solid #FFD10C; }";
$emailBody .= ".message-box { margin-top: 5px; padding: 15px; background-color: #fff; border-left: 3px solid #FFD10C; white-space: pre-wrap; }";
$emailBody .= ".footer { margin-top: 20px; padding: 20px; text-align: center; font-size: 12px; color: #777; }";
$emailBody .= ".badge { display: inline-block; background-color: #000; color: #FFD10C; padding: 5px 10px; border-radius: 5px; font-size: 12px; }";
$emailBody .= "</style></head><body>";
$emailBody .= "<div class='container'>";
$emailBody .= "<div class='header'><h1>New Contact Inquiry</h1><p>Super Petroleum Contact Form</p></div>";
$emailBody .= "<div class='content'>";

$emailBody .= "<div class='field'><div class='label'>Subject Category:</div><div class='value'><span class='badge'>" . htmlspecialchars($subjectName) . "</span></div></div>";
$emailBody .= "<div class='field'><div class='label'>Name:</div><div class='value'>" . htmlspecialchars($name) . "</div></div>";
$emailBody .= "<div class='field'><div class='label'>Email:</div><div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div></div>";

if (!empty($phone)) {
    $emailBody .= "<div class='field'><div class='label'>Phone:</div><div class='value'>" . htmlspecialchars($phone) . "</div></div>";
}

$emailBody .= "<div class='field'><div class='label'>Message:</div><div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div></div>";

$emailBody .= "</div>";
$emailBody .= "<div class='footer'>";
$emailBody .= "<p>This inquiry was submitted via the Super Petroleum website contact form.</p>";
$emailBody .= "<p>Submission Date: " . date('F j, Y, g:i a') . "</p>";
$emailBody .= "<p><strong>Please respond to:</strong> <a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></p>";
$emailBody .= "</div>";
$emailBody .= "</div></body></html>";

// Send email
$mailSent = mail($RECIPIENT_EMAIL, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We have received your message and will respond as soon as possible.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again or contact us directly at superpetroleum2021@gmail.com'
    ]);
}
?>













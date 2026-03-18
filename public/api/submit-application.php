<?php
/**
 * Job Application Submission API
 * Handles career form submissions and sends them via email
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
$SUBJECT = 'New Job Application - Super Petroleum';
$MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
$ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

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

// Get form data
$fullName = isset($_POST['fullName']) ? sanitize_input($_POST['fullName']) : '';
$address = isset($_POST['address']) ? sanitize_input($_POST['address']) : '';
$city = isset($_POST['city']) ? sanitize_input($_POST['city']) : '';
$state = isset($_POST['state']) ? sanitize_input($_POST['state']) : '';
$zipCode = isset($_POST['zipCode']) ? sanitize_input($_POST['zipCode']) : '';
$ssn = isset($_POST['ssn']) ? sanitize_input($_POST['ssn']) : '';
$maritalStatus = isset($_POST['maritalStatus']) ? sanitize_input($_POST['maritalStatus']) : '';
$previousExperience = isset($_POST['previousExperience']) ? sanitize_input($_POST['previousExperience']) : '';

// Validate required fields
$errors = [];

if (empty($fullName)) {
    $errors[] = 'Full name is required';
}

if (empty($address)) {
    $errors[] = 'Address is required';
}

if (empty($city)) {
    $errors[] = 'City is required';
}

if (empty($state)) {
    $errors[] = 'State is required';
}

if (empty($zipCode)) {
    $errors[] = 'ZIP code is required';
}

if (empty($ssn)) {
    $errors[] = 'SSN is required';
}

if (empty($maritalStatus)) {
    $errors[] = 'Marital status is required';
}

if (empty($previousExperience)) {
    $errors[] = 'Previous experience is required';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit();
}

// Handle file upload
$hasAttachment = false;
$attachmentPath = '';
$attachmentName = '';
$attachmentType = '';

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['resume'];
    
    // Check file size
    if ($file['size'] > $MAX_FILE_SIZE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'File size exceeds 10MB limit']);
        exit();
    }
    
    // Check file type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $ALLOWED_FILE_TYPES)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid file type. Only PDF, DOC, and DOCX are allowed']);
        exit();
    }
    
    $hasAttachment = true;
    $attachmentPath = $file['tmp_name'];
    $attachmentName = basename($file['name']);
    $attachmentType = $mimeType;
}

// Prepare email
$boundary = md5(time());

// Email headers
$headers = "From: Super Petroleum Careers <noreply@superpetroleum.com>\r\n";
$headers .= "Reply-To: superpetroleum2021@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

// Email body
$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";

$message .= "<!DOCTYPE html>";
$message .= "<html><head><style>";
$message .= "body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }";
$message .= ".container { max-width: 600px; margin: 0 auto; padding: 20px; }";
$message .= ".header { background-color: #FFD10C; color: #000; padding: 20px; text-align: center; }";
$message .= ".content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }";
$message .= ".field { margin-bottom: 15px; }";
$message .= ".label { font-weight: bold; color: #555; }";
$message .= ".value { margin-top: 5px; padding: 10px; background-color: #fff; border-left: 3px solid #FFD10C; }";
$message .= ".footer { margin-top: 20px; padding: 20px; text-align: center; font-size: 12px; color: #777; }";
$message .= "</style></head><body>";
$message .= "<div class='container'>";
$message .= "<div class='header'><h1>New Job Application</h1><p>Super Petroleum Career Portal</p></div>";
$message .= "<div class='content'>";

$message .= "<div class='field'><div class='label'>Full Name:</div><div class='value'>" . htmlspecialchars($fullName) . "</div></div>";
$message .= "<div class='field'><div class='label'>Address:</div><div class='value'>" . htmlspecialchars($address) . "</div></div>";
$message .= "<div class='field'><div class='label'>City:</div><div class='value'>" . htmlspecialchars($city) . "</div></div>";
$message .= "<div class='field'><div class='label'>State:</div><div class='value'>" . htmlspecialchars($state) . "</div></div>";
$message .= "<div class='field'><div class='label'>ZIP Code:</div><div class='value'>" . htmlspecialchars($zipCode) . "</div></div>";
$message .= "<div class='field'><div class='label'>SSN:</div><div class='value'>" . htmlspecialchars($ssn) . "</div></div>";
$message .= "<div class='field'><div class='label'>Marital Status:</div><div class='value'>" . htmlspecialchars($maritalStatus) . "</div></div>";
$message .= "<div class='field'><div class='label'>Previous Experience:</div><div class='value'>" . nl2br(htmlspecialchars($previousExperience)) . "</div></div>";

if ($hasAttachment) {
    $message .= "<div class='field'><div class='label'>Resume:</div><div class='value'>See attachment: " . htmlspecialchars($attachmentName) . "</div></div>";
}

$message .= "</div>";
$message .= "<div class='footer'>";
$message .= "<p>This application was submitted via the Super Petroleum website career form.</p>";
$message .= "<p>Submission Date: " . date('F j, Y, g:i a') . "</p>";
$message .= "</div>";
$message .= "</div></body></html>\r\n\r\n";

// Add attachment if present
if ($hasAttachment) {
    $fileContent = file_get_contents($attachmentPath);
    $fileContent = chunk_split(base64_encode($fileContent));
    
    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: {$attachmentType}; name=\"{$attachmentName}\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"{$attachmentName}\"\r\n\r\n";
    $message .= $fileContent . "\r\n";
}

$message .= "--{$boundary}--";

// Send email
$mailSent = mail($RECIPIENT_EMAIL, $SUBJECT, $message, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully! We will review your application and contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send application. Please try again or contact us directly.'
    ]);
}
?>













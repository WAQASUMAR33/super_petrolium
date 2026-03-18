# Super Petroleum - PHP API Endpoints

This directory contains PHP API endpoints for handling form submissions.

## Files

- `submit-application.php` - Handles job application submissions from the careers page
- `submit-contact.php` - Handles contact form submissions

## Setup Instructions

### 1. Server Requirements

- PHP 7.4 or higher
- PHP `mail()` function enabled
- Proper email server configuration (SMTP)

### 2. Configuration

#### For Job Applications (`submit-application.php`)
- Line 23: Change `$RECIPIENT_EMAIL` to your email address
- Line 24: Modify `$SUBJECT` if needed
- Lines 25-26: Adjust file size and type restrictions if needed

#### For Contact Form (`submit-contact.php`)
- Line 23: Change `$RECIPIENT_EMAIL` to your email address
- Line 24: Modify `$SUBJECT_PREFIX` if needed

### 3. Deployment

#### Option A: Same Server as Next.js App
If your Next.js app is running on a server with PHP support:

1. Place these files in the `public/api/` directory
2. Ensure PHP files are executable
3. Access endpoints at: `https://yourdomain.com/api/submit-application.php`

#### Option B: Separate PHP Server
1. Deploy these files to a PHP-enabled server
2. Update the API URLs in your Next.js components
3. Ensure CORS headers allow requests from your Next.js domain

### 4. Email Configuration

#### Using PHP mail() function (default)
The scripts use PHP's built-in `mail()` function. Your server must have:
- A properly configured mail transfer agent (MTA)
- SPF and DKIM records for better deliverability

#### Using SMTP (recommended for production)
For better email deliverability, consider using PHPMailer with SMTP:

```php
// Install PHPMailer
// composer require phpmailer/phpmailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-app-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
```

## API Endpoints

### 1. Submit Job Application

**Endpoint:** `/api/submit-application.php`

**Method:** POST

**Content-Type:** `multipart/form-data` (for file upload support)

**Parameters:**
- `fullName` (required) - Applicant's full name
- `address` (required) - Street address
- `city` (required) - City
- `state` (required) - State
- `zipCode` (required) - ZIP code
- `ssn` (required) - Social Security Number
- `maritalStatus` (required) - Marital status
- `previousExperience` (required) - Work experience description
- `resume` (optional) - Resume file (PDF, DOC, DOCX, max 10MB)

**Example Response (Success):**
```json
{
  "success": true,
  "message": "Application submitted successfully! We will review your application and contact you soon."
}
```

**Example Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Full name is required", "Email is invalid"]
}
```

### 2. Submit Contact Form

**Endpoint:** `/api/submit-contact.php`

**Method:** POST

**Content-Type:** `application/json` or `application/x-www-form-urlencoded`

**Parameters:**
- `name` (required) - Contact name
- `email` (required) - Contact email
- `phone` (optional) - Phone number
- `subject` (required) - Inquiry subject/category
- `message` (required) - Message content

**Subject Categories:**
- `general` - General Inquiry
- `fuel-cards` - Fuel Card Program
- `truck-care` - Truck Care Services
- `locations` - Location Information
- `careers` - Career Opportunities
- `feedback` - Feedback
- `other` - Other

**Example Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We have received your message and will respond as soon as possible."
}
```

**Example Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Email is required", "Message is required"]
}
```

## Security Considerations

1. **Input Validation:** Both scripts validate and sanitize all inputs
2. **File Upload Security:** 
   - File type validation using MIME type detection
   - File size limits enforced
   - Only PDF, DOC, and DOCX files accepted
3. **XSS Protection:** All output is HTML-escaped
4. **CORS:** CORS headers can be restricted to specific domains in production
5. **Rate Limiting:** Consider implementing rate limiting to prevent abuse

## Production Recommendations

1. **Use HTTPS:** Always use SSL/TLS in production
2. **Configure SPF/DKIM:** Set up proper email authentication
3. **Add Rate Limiting:** Implement rate limiting to prevent spam
4. **Add CAPTCHA:** Consider adding reCAPTCHA to forms
5. **Error Logging:** Log errors to files instead of displaying them
6. **Email Service:** Use a dedicated email service (SendGrid, AWS SES, etc.)
7. **Restrict CORS:** Update CORS headers to allow only your domain

## Testing

### Test Job Application Submission:
```bash
curl -X POST http://localhost:3000/api/submit-application.php \
  -F "fullName=John Doe" \
  -F "address=123 Main St" \
  -F "city=Adel" \
  -F "state=GA" \
  -F "zipCode=31620" \
  -F "ssn=123-45-6789" \
  -F "maritalStatus=single" \
  -F "previousExperience=5 years of truck driving" \
  -F "resume=@/path/to/resume.pdf"
```

### Test Contact Form Submission:
```bash
curl -X POST http://localhost:3000/api/submit-contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "subject": "general",
    "message": "Test message"
  }'
```

## Troubleshooting

### Emails not sending?
1. Check PHP error logs
2. Verify mail server configuration
3. Test with a simple PHP mail script
4. Check spam folders
5. Verify DNS records (SPF, DKIM)

### File uploads not working?
1. Check `php.ini` settings:
   - `file_uploads = On`
   - `upload_max_filesize = 10M`
   - `post_max_size = 10M`
2. Verify directory permissions
3. Check `$_FILES` array for errors

### CORS errors?
1. Update CORS headers to allow your domain
2. Ensure OPTIONS requests are handled
3. Check browser console for specific errors

## Support

For issues or questions, contact: superpetroleum2021@gmail.com













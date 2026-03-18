# PHP API Setup Guide for Super Petroleum Website

This guide explains how to set up and configure the PHP APIs for handling form submissions.

## 📁 Files Created

1. **`public/api/submit-application.php`** - Handles job application submissions
2. **`public/api/submit-contact.php`** - Handles contact form submissions  
3. **`public/api/README.md`** - Detailed API documentation

## 🚀 Quick Start

### Step 1: Configure Email Address

Edit both PHP files and update the recipient email:

**In `public/api/submit-application.php` (Line 23):**
```php
$RECIPIENT_EMAIL = 'superpetroleum2021@gmail.com'; // Change to your email
```

**In `public/api/submit-contact.php` (Line 23):**
```php
$RECIPIENT_EMAIL = 'superpetroleum2021@gmail.com'; // Change to your email
```

### Step 2: Deploy the APIs

#### Option A: Deploy with Next.js (Recommended for Development)

The PHP files are in the `public/api/` directory. To use them:

1. **Install PHP** on your server if not already installed
2. **Configure your web server** (Apache/Nginx) to process `.php` files
3. The files will be accessible at:
   - `http://localhost:3000/api/submit-application.php`
   - `http://localhost:3000/api/submit-contact.php`

#### Option B: Deploy to Separate PHP Server

1. Copy the `public/api/` folder to your PHP server
2. Update the API URLs in your components (already done - see below)
3. Ensure CORS is properly configured

### Step 3: Server Configuration

#### Apache (.htaccess)
Create or update `.htaccess` in the `public/api/` directory:

```apache
# Enable PHP
AddHandler application/x-httpd-php .php

# Set upload limits
php_value upload_max_filesize 10M
php_value post_max_size 10M

# Enable CORS (adjust domain in production)
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type"
```

#### Nginx
Add to your Nginx configuration:

```nginx
location /api/ {
    # Enable PHP processing
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
    
    # File upload limits
    client_max_body_size 10M;
}
```

### Step 4: Email Configuration

#### For Local Development

**Windows (using fake sendmail):**
1. Download [fake sendmail](https://github.com/sendmail-tester/sendmail-fake)
2. Configure in `php.ini`:
```ini
[mail function]
SMTP = smtp.gmail.com
smtp_port = 587
sendmail_from = your-email@gmail.com
sendmail_path = "C:\path\to\sendmail.exe -t"
```

**Linux/Mac:**
```bash
# Install sendmail
sudo apt-get install sendmail  # Ubuntu/Debian
brew install sendmail          # macOS

# Start sendmail service
sudo service sendmail start    # Linux
```

#### For Production (Recommended: Use SMTP)

Update both PHP files to use PHPMailer with SMTP:

1. **Install PHPMailer:**
```bash
composer require phpmailer/phpmailer
```

2. **Update the PHP files** (add after the includes):
```php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'superpetroleum2021@gmail.com';
$mail->Password = 'your-app-password';  // Use App Password for Gmail
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->setFrom('noreply@superpetroleum.com', 'Super Petroleum');
$mail->addAddress($RECIPIENT_EMAIL);
$mail->isHTML(true);
$mail->Subject = $SUBJECT;
$mail->Body = $message;
$mailSent = $mail->send();
```

### Step 5: Gmail Setup (if using Gmail)

1. **Enable 2-Factor Authentication** in your Google Account
2. **Create an App Password:**
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in SMTP configuration

## 🔧 Component Integration

The forms have already been updated to use the APIs:

### Careers Form (`src/app/components/careers.tsx`)
```typescript
// Submits to: /api/submit-application.php
// Includes file upload support for resumes
```

### Contact Form (`src/app/contact/page.tsx`)
```typescript
// Submits to: /api/submit-contact.php
// Sends JSON data
```

## 📧 Testing the APIs

### Test Career Application (with curl):
```bash
curl -X POST http://localhost:3000/api/submit-application.php \
  -F "fullName=John Doe" \
  -F "address=123 Main St" \
  -F "city=Adel" \
  -F "state=GA" \
  -F "zipCode=31620" \
  -F "ssn=123-45-6789" \
  -F "maritalStatus=single" \
  -F "previousExperience=5 years of truck driving"
```

### Test Contact Form (with curl):
```bash
curl -X POST http://localhost:3000/api/submit-contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "general",
    "message": "Test message"
  }'
```

### Test in Browser:
1. Start your Next.js app: `npm run dev`
2. Go to http://localhost:3000/careers
3. Fill out and submit the form
4. Check your email inbox (and spam folder!)

## 🔐 Security Checklist

- [ ] Update `$RECIPIENT_EMAIL` in both PHP files
- [ ] Configure SMTP for reliable email delivery
- [ ] Set up SPF and DKIM records for your domain
- [ ] Enable HTTPS in production
- [ ] Restrict CORS to your domain only
- [ ] Add rate limiting to prevent spam
- [ ] Consider adding reCAPTCHA to forms
- [ ] Set up error logging
- [ ] Test file upload security
- [ ] Monitor for spam submissions

## 🐛 Troubleshooting

### Emails Not Sending?

1. **Check PHP error log:**
```bash
tail -f /var/log/php_errors.log
```

2. **Test PHP mail function:**
Create `test-mail.php`:
```php
<?php
$to = "superpetroleum2021@gmail.com";
$subject = "Test Email";
$message = "This is a test email";
$headers = "From: test@example.com";

if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Email sending failed!";
}
?>
```

3. **Check spam folder**
4. **Verify SMTP credentials**
5. **Check firewall/port settings** (port 587 or 465)

### File Upload Issues?

Check `php.ini` settings:
```ini
file_uploads = On
upload_max_filesize = 10M
post_max_size = 10M
max_execution_time = 300
```

Restart PHP after changes:
```bash
sudo service php8.1-fpm restart  # Linux
```

### CORS Errors?

Update CORS headers in PHP files to be more restrictive:
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

## 📝 Email Templates

Both APIs send beautifully formatted HTML emails with:
- Company branding (yellow #FFD10C and black)
- Clear field labels and values
- Responsive design
- Professional styling
- Submission date/time
- Reply-to headers

## 🎯 Next Steps

1. ✅ Configure recipient email address
2. ✅ Set up email server (SMTP recommended)
3. ✅ Test both forms
4. ✅ Deploy to production
5. ✅ Monitor email delivery
6. ✅ Set up email notifications
7. ✅ Add spam protection (reCAPTCHA)
8. ✅ Configure backups

## 📞 Support

If you need help:
- Check the detailed API documentation: `public/api/README.md`
- Review PHP error logs
- Test with curl commands
- Contact: superpetroleum2021@gmail.com

---

**Note:** For production use, consider using a professional email service like:
- SendGrid
- Amazon SES
- Mailgun
- Postmark

These services offer better deliverability, tracking, and reliability than basic SMTP.













<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Always return JSON
header("Content-Type: application/json");

// ✅ Load .env file manually (created by GitHub Action)
$envPath = __DIR__ . '/.env';
if (file_exists($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            putenv(trim($name) . '=' . trim($value));
        }
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $company = $_POST["company"] ?? '';
    $message = $_POST["message"] ?? '';

    $mail = new PHPMailer(true);

    try {
        // ✅ SMTP Config (from environment variables)
        $mail->isSMTP();
        $mail->Host       = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
        $mail->Port       = getenv('SMTP_PORT') ?: 465;
        $mail->Username   = getenv('SMTP_USER');
        $mail->Password   = getenv('SMTP_PASS');
        $mail->SMTPSecure = getenv('SMTP_SECURE') ?: 'ssl';
        $mail->SMTPAuth   = true;

        // ✅ From & To
        $fromEmail = getenv('SMTP_FROM') ?: $mail->Username;
        $mail->setFrom($fromEmail, $name ?: 'Evo9Labs Website');
        $mail->addReplyTo($email, $name);
        $mail->addAddress($fromEmail);

        // ✅ Email content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission";
        $mail->Body    = "
            <h2>New Contact Form Submission</h2>
            <p><b>Name:</b> {$name}</p>
            <p><b>Email:</b> {$email}</p>
            <p><b>Company:</b> {$company}</p>
            <p><b>Message:</b><br>{$message}</p>
        ";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Invalid request."]);
}

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Always return JSON
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $company = $_POST["company"] ?? '';
    $message = $_POST["message"] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Enable debug logging (check Hostinger PHP error log for details)
        $mail->SMTPDebug  = 2; 
        $mail->Debugoutput = 'error_log';

        // SMTP config
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'support@evo9labs.com'; 
        $mail->Password   = 'evo9labs*BS0'; 
        $mail->SMTPSecure = 'ssl';   // try 'tls' with port 587 if ssl fails
        $mail->Port       = 465;

        // From & To
        $mail->setFrom('support@evo9labs.com', $name ?: 'Evo9Labs Website');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('support@evo9labs.com'); 


        // Email content
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

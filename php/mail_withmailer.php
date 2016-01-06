<?php
require_once('email_config.default.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 3;

$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
                           // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication


$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$mail->smtpConnect($options);
$mail->From = 'davidgoodmandeveloper@gmail.com';
$mail->FromName = 'David Goodman';
$mail->addAddress($email);     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('davidgoodmandeveloper@gmail.com', 'David');
$mail->addCC('davidgoodmandeveloper@gmail.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $message;
//$mail->AltBody = $message;

if(!$mail->send()) {
    print_r('Message could not be sent.');
    print_r('Mailer Error: ' . $mail->ErrorInfo);
} else {
    print_r('Message has been sent');
}
?>

<?php
require_once('email_config.default.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
//TODO try ob_start, or whatever, set SMTPDebug to 0;
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

ob_start();
$mail = new PHPMailer;
$mail->SMTPDebug = 3;                               // Enable verbose debug output

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
$mail->addAddress($email, $name);     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('davidgoodmandeveloper@gmail.com', 'David');
//$mail->addCC('cc@example.com');
$mail->addBCC('davidgoodmandeveloper@gmail.com');
$mail->addAttachment('../../DavidResume.pdf');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);
$link1 = "<a href='https://www.linkedin.com/profile/view?id=AAIAAAVkYgIBqxwIqudQ6kJ2xpG6hcBNFVp0b8M&trk=nav_responsive_tab_profile'><img style='width: 45px; height: 45px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/2000px-Linkedin_icon.svg.png'></a>";
$link2 = "<a href='https://github.com/deg5112'><img style='width: 125px; height: 60px; margin-bottom: -7px;' src='http://www.aha.io/assets/integration_logos/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png'></a>";
$mail->Subject = 'Thank you for reaching out - David Goodman';
$mail->Body    =
"<pre style='font-family:times; font-size: 16px'>
<b>Your Message:</b> '$message'

Hi $name,

Thanks so much for getting in touch, I will respond to you as soon as possible,

David Goodman
Web Developer
davidgoodmandeveloper@gmail.com
952-693-3823
$link1 $link2
</pre>";

$mail->AltBody = $message;

if(!$mail->send()) {
    $outputBuffer = ob_get_contents();
    ob_end_clean();
    $response  = [
        'success'=>false,
        'buffer'=>$outputBuffer
    ];

} else {
    $outputBuffer = ob_get_contents();
    ob_end_clean();
    $response  = [
        'success'=>true,
        'buffer'=>$outputBuffer
    ];

}

print(json_encode($response));

?>


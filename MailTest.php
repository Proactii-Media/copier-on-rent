<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'devloperproactii@gmail.com';                     // SMTP username
    $mail->Password   = 'yhfmblqiqjmetonj';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('dainik.tandel@proactii.com', 'No Reply ICOG');
    $mail->addAddress('dainik.tandel@proactii.com', 'ICOG');     // Add a recipient
    $mail->addAddress('dainik.tandel@proactii.com');     // Add a recipient
    //$mail->addReplyTo('dainik.tandel@proactii.com', 'ICOG');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
   // $mail->addAttachment('https://www.proactii.com/ICOG-NEW/pdf/1-l-t.pdf');    // Optional name
	//$mail->addAttachment("uploads/".$file_name);
	
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = '<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet">
	</head>
	<body>
		<div style="color:black;">
		<div id="" style="padding:5% 0%" align="center">
			<table style="width:60%; border-collapse: collapse; background: #fdfdfd; box-shadow: 0 5px 48px 0 rgb(142 142 142 / 9%);">
				<tr>
					<td style="background: #e6fff8; color: #171717; padding: 1% 0%; background-position: center; background-repeat: no-repeat;background-size: cover;text-align: center; font-weight: 700;">
						<div style="display: flex;">
							<span style="width: 20%; padding-top: 20px; padding-left: 20px;"><a href="index.html"><img src="img/logo/logo.png" class="icog-logo" alt=""></a></span>
							<h1 style="text-align: center; width: 80%; padding-right: 34px; font-family: Playfair Display;font-size: 26px;">Case study download request</h1>
						</div>
					</td>
				</tr>
				<tr style="" align="center">
					<td>
						<div>
							<h3 style="width: 73%; padding-top: 25px; font-family: Lato; font-size: 22px; line-height: 28px; font-weight: 500;">
								We received new download request from "customer name". Here is the details.
							</h3>
						</div>
						<div style="background: #fdfdfd; padding: 20px; width: 300px; box-shadow: 0 5px 48px 0 rgb(142 142 142 / 9%); margin-top: 53px; font-family: Lato;">
							<h3>Name:&nbsp;&nbsp;hskhskjs</h3>
							<h3>Email:&nbsp;&nbsp;skjskajsakjs</h3>
							<h3>Phone No:&nbsp;&nbsp;skjskajsakjs</h3>
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: center; padding: 5% 5% 0% 5%; font-size: 15px; color: #777777;">
						<div style="padding: 3% 0%">
							<a href="https://www.facebook.com/" style="text-decoration: none;">
								<img src="http://proactii.com/Furnipart/images/facebook.png" alt="Facebook">
							</a>
							<a href="https://www.twitter.com"  style="text-decoration: none;">
								<img src="http://proactii.com/Furnipart/images/twitter.png" alt="Twitter">
							</a>
							<a href="https://www.instagram.com">
								<img src="http://proactii.com/Furnipart/images/instagram.png" alt="Instagram">
							</a>
						</div>
						<p>
							Email sent by ICOG<br>
							Copyright @ 2020 . All rights reserved
						</p>
					</td>
				</tr>
			</table>	
		</div>
	</div>
	</body>
</html>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
<?php
try {
	if(isset($_POST['btnHire'])) 
	{
		$name		= $_POST['hire_name'];
		$phone		= $_POST['hire_phone'];
		$location	= $_POST['hire_location'];
		$desig		= $_POST['hire_desig'];
		$message	= $_POST['hire_message'];
		
		
		require_once 'mail.php';
		//$mail->addAddress($email);
		
		// Email subject
		$mail->Subject = 'Hiring request from '.$name;
		$mail->AddAttachment($_FILES['hire_file']['tmp_name'], $_FILES['hire_file']['name']);
		// Set email format to HTML
		$mail->isHTML(true);
		
		$mailContent = '<!DOCTYPE html>
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
										<h1 style="text-align: center; width: 80%; padding-right: 34px; font-family: Playfair Display;font-size: 26px;">Hiring request</h1>
									</div>
								</td>
							</tr>
							<tr style="" align="center">
								<td>
									<div>
										<h3 style="width: 73%; padding-top: 25px; font-family: Lato; font-size: 22px; line-height: 28px; font-weight: 500;">
											We received new Hiring request from website. Here is the details.
										</h3>
									</div>
									<div style="background: #fdfdfd; padding: 20px; width: 300px; box-shadow: 0 5px 48px 0 rgb(142 142 142 / 9%); margin-top: 53px; font-family: Lato;">
										<h3>Name:&nbsp;&nbsp;'.$name.'</h3>
										<h3>Phone No:&nbsp;&nbsp;'.$phone.'</h3>
										<h3>Location:&nbsp;&nbsp;'.$location.'</h3>
										<h3>Designation:&nbsp;&nbsp;'.$desig.'</h3>
										<h4>Message No:&nbsp;&nbsp;'.$message.'</h3>
									</div>
								</td>
							</tr>
							<tr style="">
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
										Email sent by Copier on rent<br>
										Copyright @ 2021 . All rights reserved
									</p>
								</td>
							</tr>
						</table>	
					</div>
				</div>
				</body>
			</html>';
			
			$mail->Body = $mailContent;

			// Send email
			if(!$mail->send()){
				/*$data['status'] = "error";
				$data['err_msg'] = "Error";*/
			    //echo 'Message could not be sent.';
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			}else{
			  /*header('Location: index.html');
				exit;*/
				?>
				<script type="text/javascript">
					alert("successfuly send mail");
				   window.location = "http://copieronrent.com//hiring.html"
				</script>
				<?php
			}	
				
	}
} catch (phpmailerException $e) {
	echo $e->errorMessage();
}
?>
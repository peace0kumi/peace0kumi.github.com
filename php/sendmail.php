<html>
<head>
<title>PHPMailer - SMTP advanced test with authentication</title>
</head>
<body>
<?php
include('class.phpmailer.php');

$mail = new PHPMailer(true);
$mail->IsSMTP();
try {
  $mail->Host       = "smtp.naver.com";
  $mail->SMTPDebug  = 2;
  $mail->SMTPAuth   = true;
  $mail->SMTPSecure = "ssl";
  $mail->Host       = "smtp.naver.com";
  $mail->Port       = 465;
  $mail->Username   = "pyhoo78";
  $mail->Password   = "rhdwn1225";
  $mail->AddAddress('pyhoo78@naver.com', '박영후');
  $mail->SetFrom('pyhoo78@naver.com', '박영후');
  $mail->AddReplyTo('pyhoo78@naver.com', '박영후');
  $mail->Subject = 'PHPMailer Test Subject via mail(), advanced';
  $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!';
  $mail->MsgHTML(file_get_contents('contents.html'));

  $mail->Send();
  echo "Message Sent OK</p>\n";
} catch (phpmailerException $e) {
  echo $e->errorMessage();
} catch (Exception $e) {
  echo $e->getMessage();
}
?>

</body>
</html>

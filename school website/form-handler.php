<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = 'sylvawebsite.com';

$email_subect = 'New Form Submission';

$email_body = "User Name: $name.\n" .
      "User Email: $visitor_email.\n" .
      "Subject: $visitor_email.\n" .
     "User Message: $message .\n";


$to = 'sylvaanusarthur22@gmail.com';

$heades = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";





mail($to,$enail_subject,$email_body,$headers);

header("Location: contac.html.html");
?>













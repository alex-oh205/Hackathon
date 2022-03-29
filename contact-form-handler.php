<?php

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $emailFrom = $_POST['email'];
  $message = $_POST['message'];
  
  $emailTo = 'aomc205@gmail.com';
  $headers = "From: ".$emailFrom;
  $txt = "You have recieved a message from ".$name.".\n\n".$message;
  
  mail($emailTo, $subject, $txt, $headers);
  header("Location: contactus.html?mailsend");
}

?>
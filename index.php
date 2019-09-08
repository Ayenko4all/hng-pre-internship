<?php

if(isset($_POST['submitBtn'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $title = $_POST['title'];
  $message = $_POST['message'];

  $data = "Name: " . $name . " , " . "Email: " . $email . " , " . "Title: " . $title . " , " . "Message: " . $message . "\r\n";

  $saveMgs = file_put_contents('contact.txt', $data, FILE_APPEND | LOCK_EX);
  echo "<script type='text/javascript'>alert('You message has been sent, I will get back to you in no time')</script>";
  echo "<script type='text/javascript'>document.location='kehinde.html'</script>";
}








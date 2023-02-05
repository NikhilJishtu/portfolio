<?php

$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    // verstuur het formulier
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "nikhiljishtuportfolio@gmail.com";
    $body = "";

    $body .= "From: " . $userName . "\r\n";
    $body .= "Email: " . $userEmail . "\r\n";
    $body .= "Message: " . $message . "\r\n";

    mail($to, $messageSubject, $body);

    $message_sent = true;
    } 

    else {
        $invalid_class_name = "form-invalid";
    }
}
?>

<?php
if($message_sent):

// echo '<script>window.alert("Thanks, I will be in touch!")</script>';

?>

<?php
else:
?>

<?php
endif;
?>
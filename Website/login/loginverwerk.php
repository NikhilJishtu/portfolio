<?php

require 'config.php';

if (strlen($username) > 0 && strlen($password) > 0) {
    $password = sha1($password);

    $query = "SELECT * FROM users";
    $query .= "WHERE username='$username' AND password='$password'";

    $result = mysqli_query($mysqli, $query);


    if (mysqli_num_rows($result) == 1) {
        echo "<p>ingelogd!</p>";
    } 
    
    else {
        echo "<p>Naam en/of wachtwoord zijn fout</p>";
    }
}

?>
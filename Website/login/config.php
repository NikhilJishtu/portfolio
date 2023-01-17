<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// database log-in gegevens
$db_hostname = 'localhost';
$db_username = '87248';
$db_password = 'ftpwachtwoo';
$db_database = '87248_portfolio';

// maak de database verbinding
$mysqli = mysqli_connect($db_hostname, $db_username, $db_password, $db_database);

// als de verbinding niet gemaakt kan worden: geef een melding
if (!$mysqli) {
    echo "FOUT: geen connectie naar database. <br>";
    echo "Error: " . mysqli_connect_error() . "<br/>";
    exit;
}

?>
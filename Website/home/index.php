<?php

require_once 'session.inc.php';
require 'config.php';

$query = "SELECT * FROM crud_agenda WHERE userID=".$_SESSION["id"];

?>
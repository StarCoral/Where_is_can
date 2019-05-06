<?php
header('Content-Type: text/html; charset=utf-8');
include("connectdb.php");

$sql = "UPDATE `rank` SET `score` = '$score' , `time` = '$txt' WHERE `account` = '$username' ;"

$result = mysqli_query($conn, $sql);


?>
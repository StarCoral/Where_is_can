<?php


$host = "localhost";
$username = "root";
$password = "";
$db = "14_db";


$conn=mysqli_connect($host,$username,$password,$db);
    if($conn){
        
    }else{
        echo"error";    
    }
	mysqli_set_charset($conn,"utf8");
?>

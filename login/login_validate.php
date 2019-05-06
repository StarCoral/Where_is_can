<?php


//session_start(); 


include_once("connectdb.php");


?>





<?php

if (!empty($_POST['username']) or !empty($_POST['password'])) {

    $user = trim($_POST['username']);

    $pass = trim($_POST['password']);

 @$sql = "SELECT * FROM 14_db_01 WHERE username ='".$user."' AND password = '".$pass."' LIMIT 1";

 $res = mysqli_query($conn,$sql) or die(mysqli_error($conn));

 if (mysqli_num_rows($res) == 1) {

  $rows = mysqli_fetch_assoc($res);

  //$_SESSION['username'] = $rows['username'];

  header("location:../maps/start.html");

 } else {

  echo "Invalid login information.";

  exit();

 }

    } else {

      echo "Please input username and password!";

    }





?>

<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<title>所以我說那個罐罐呢</title>
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <title>map1</title>
	<link rel="stylesheet" type="text/css" href="login.css">
	<iframe loop="true" hidden=true width="854" height="480" src="./music/Cubworth _ Happy Music.mp3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="/resources/demos/style.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="../leaderboard/Leaderboard.js"></script>
	
</head>
<body>
	<div id ="background"> 			
		<form  id = "login" action = "login_validate.php" method = "POST">
		<div id ="form" >
		帳號: 
		<input type = "text" style="font-size:25px" name = "username">
		<br />
		密碼: 
		<input type = "password" style="font-size:25px" name = "password">
		<br />
		</div>
		<input id ="login_button" value = "Login" type="image" src="./photo/login_page.png" onClick="document.login.submit();" width="227" height ="90">
		</form>		
		
	
	
	</div> 
	
	<div>
	<p id="Leaderboard" >排行榜</p>
	</div>
	<div>
	<p id="gametext" style ="color:	#FFFFC9; position:absolute; top:600px; left:1200px; font-family:our; font-size:30px;  z-index:2;">遊戲說明</p>
	</div>
	
	<div id ="dialogG" title="遊戲說明" style="text-align: center; font-family:our">
		人物移動: 上下左右<br>
		互動對話: 任意英文鍵
	</div>
	
	<div id="dialogL" title="排行榜" style="text-align: center; font-family:our">
		<table width="500px" >
		<tr>
		<td>排名</td>
		<td>帳號</td>
		<td>分數</td>
		<td>時間</td>
		</tr>
			<?php
			header('Content-Type: text/html; charset=utf-8');
			include("../leaderboard/connectdb.php");


			$sql = "SELECT 14_db_02.* FROM `14_db_02`\n"

			. "ORDER BY `score` DESC, `time`ASC";


			$result = mysqli_query($conn, $sql);



			//使用迴圈逐筆讀取記錄
			$i =1;
			while ($row = mysqli_fetch_array($result)) {
			echo "<tr><td> $i </td><td> $row[1] </td><td> $row[2] </td><td>$row[3]</td></tr>";
			$i=$i+1;
			}

			echo '</table>';
			?>

	</div>
	
	
</body>
</html>
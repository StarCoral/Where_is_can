<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>所以我說那個罐罐呢</title>
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/score.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style2.css">
	
	<script type="text/javascript" src="js/map2_data.js"></script>
	<script type="text/javascript" src="js/game2.js"></script>
	<script type="text/javascript" src="js/score.js"></script>
	
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	
	<iframe loop="true" hidden=true width="854" height="480" src="./Dirty_Mac.mp3" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="../leaderboard/Leaderboard.js"></script>
	<script src="../TimerBack/timer.js"></script>

</head>
<body onload="startTime()">




<!--地圖-->

<div id="map" class="map">
	<img id="background_bottom" class="bottom" src="photo/map2.png" width="1600" height="1600" >
    <img id="start" class="photo" src="photo/mainC_1.png">
    <img id="mainC" src="photo/mainC_0.png" style="display: none">
	<script>
		reat = $("#mainC").position();
	</script>
	
	
	
	
</div >

<div id="problem_bg" style="display:none">

</div>

<div id="problems" style="display:none">

<div id="rightQ">
	<h4>
		<img src="QuitPicture/Q1_1.png" id="Q">
	</h4>
</div>
<!--<div class="example">-->
    <div id="left_topic">
        <img src="QuitPicture/Q1_2.png">
		<div id="drag1" class="draggable-droppable"></div>
		<div id="drag2" class="draggable-droppable"></div>
		<div id="drag3" class="draggable-droppable"></div>
        <button id="submitcode1" onclick="code1submit()">submit</button>
		
    </div>

    <div id="right">
		<h4>黑貓的力氣是體重1.5倍、白貓的力氣是體重的1.2倍、黃貓的力氣是體重的1倍。</h4>
        <h4>請完成右邊的Class Example。</h4>

        <h4><!--darg17-->
            <div id="drag17" class="draggable-droppable">
                <div id="code1">
				public double getPower(){<br>
				&emsp;return this.weight * 1.5;
				}
				</div>
            </div>
        </h4>
        <h4><!--darg18-->
            <div id="drag18" class="draggable-droppable">
                <div id="code2">
				public double getPower(){<br>
				&emsp;return this.weight * 1.2;<br>
				}
				</div>
            </div>
        </h4>
        <h4><!--darg19-->
            <div id="drag19" class="draggable-droppable">
				<div id="code3">
				public double getPower(){<br>
				&emsp;return this.weight;<br>
				}
				</div>
            </div>
        </h4>
        <h4><!--darg20-->
            <div id="drag20" class="draggable-droppable">
				<div id="code4">
				public double getPower(){<br>
				&emsp;return weight;<br>
				}
				</div>
            </div>
        </h4>
        <h4><!--darg21-->
            <div id="drag21" class="draggable-droppable">
                <div id="code5">
					public double getPower(){<br>
					&emsp;return weight * 1.5;<br>
					}
				</div>
				
            </div>
        </h4>
        <h4><!--darg22-->
            <div id="drag22" class="draggable-droppable">
				<div id=="code6">
				public double getpower(){<br>
				&emsp;return weight * 1.2;<br>
				}
				</div>
            </div>
        </h4>
    </div>
	
	<script src="js/drag.js"></script>
	<script src="js/submit.js"></script>
	
<!--</div>-->

</div>

<div id="footer">
	<div class="container">
		<div id="dialog_B" class="content" style="display: none" width ="1600" height="192">
			<img id="dialog_photo" src="photo/mainC_B_1.png" width="192" height="192">
			<div id="dialog">default content</div>
			<br>
		</div>
	
	</div>
	
	<div id="state">
		<div>
		<p id="Leaderboard" style="position:absolute;   top:-10px;   left:100px;" >排行榜</p>
		<p id="Leaderboard" style="position:absolute;   top:-10px;   left:300px;" >分數: </p>
		<p id="demoScore" style="position:absolute;   top:-8px;   left:400px;"><script>document.getElementById("demoScore").innerHTML = score;</script></p>
		<p id="Leaderboard" style="position:absolute;   top:-10px;   left:500px;" >倒數計時: </p>
		<div id ="txt" class="demoTimeBack"  style="position:absolute;   top:20px;   left:650px;">唷呼</div>


		</div>
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
			//header('Content-Type: text/html; charset=utf-8');
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

</div>

</div>

<!--
<script>
	 $(document).keypress(function (event) {
			
			showContent();
            //$("#dialog_B").css("display", "none");
			//stop = false;
    });
	
	
</script>-->

</body>
</html>
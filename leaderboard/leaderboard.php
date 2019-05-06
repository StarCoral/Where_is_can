<?php
header('Content-Type: text/html; charset=utf-8');
include("connectdb.php");


$sql = "SELECT 14_db_02.* FROM `rank`\n"

    . "ORDER BY `score` DESC, `time`ASC";


$result = mysqli_query($conn, $sql);

//使用表格顯示資料
echo 'Leader Board<br />
      <table border="1"><tr><th>Rank</th><th>Account</th><th>Score</th><th>Time</th></tr>';

//使用迴圈逐筆讀取記錄
$i =1;
while ($row = mysqli_fetch_array($result)) {
  echo "<tr><td> $i </td><td> $row[1] </td><td> $row[2] </td><td>$row[3]</td></tr>";
  $i=$i+1;
}

echo '</table>';
?>

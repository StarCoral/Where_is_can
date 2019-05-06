<?php
include "DBConnection.php"; // 載入DB連線設定
$map_sql = "SELECT map_array FROM map where Checkpoint = 'map1';";// sql 查詢語句
$map_search = DBConnection::PDO()->query($map_sql)->fetch();// 執行查詢
echo $map_search['map_array'];
$map_array = $map_search['map_array'];// 查詢結果


?>
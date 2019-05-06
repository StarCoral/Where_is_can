<?php


class DBConnection
{
    public static $host = "localhost";
    public static $db_name = "game_temp";
    public static $user = "root";
    public static $password = "";

    public static function PDO()
    {
        try {
            $dbconnect = "mysql:host=" . DBConnection::$host . ";dbname=" . DBConnection::$db_name;
            $PDO = new PDO($dbconnect, DBConnection::$user, DBConnection::$password);

            return $PDO;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

}
?>
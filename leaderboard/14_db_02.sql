-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018-07-01 02:59:34
-- 伺服器版本: 10.1.33-MariaDB
-- PHP 版本： 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `14_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `14_db_02`
--

CREATE TABLE `14_db_02` (
  `No.` int(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `score` int(255) NOT NULL DEFAULT '0',
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `14_db_02`
--

INSERT INTO `14_db_02` (`No.`, `account`, `score`, `time`) VALUES
(1, 'alfred', 90, '00:03:33'),
(2, 'admin', 100, '00:04:10'),
(3, 'Arthur', 78, '00:03:20'),
(4, 'cis', 60, '00:04:55'),
(5, 'idiot', 0, '00:05:00'),
(6, 'test01', 90, '00:04:30');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `14_db_02`
--
ALTER TABLE `14_db_02`
  ADD PRIMARY KEY (`No.`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `14_db_02`
--
ALTER TABLE `14_db_02`
  MODIFY `No.` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

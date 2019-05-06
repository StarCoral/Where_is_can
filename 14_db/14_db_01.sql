-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018-07-01 02:59:17
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
-- 資料表結構 `14_db_01`
--

CREATE TABLE `14_db_01` (
  `id` int(10) NOT NULL,
  `username` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT 'admin',
  `password` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '1234'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 資料表的匯出資料 `14_db_01`
--

INSERT INTO `14_db_01` (`id`, `username`, `password`) VALUES
(1, 'admin', '1234'),
(2, 'alfred', '0704'),
(3, 'Arthur', '1234'),
(4, 'idiot', '1234'),
(5, 'cis', '1234'),
(6, 'test01', '1234');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `14_db_01`
--
ALTER TABLE `14_db_01`
  ADD PRIMARY KEY (`id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `14_db_01`
--
ALTER TABLE `14_db_01`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- MySQL dump 10.13  Distrib 5.6.26, for osx10.8 (x86_64)
--
-- Host: localhost    Database: blackbox
-- ------------------------------------------------------
-- Server version	5.6.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `replays`
--

DROP TABLE IF EXISTS `replays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `replays` (
  `id` int(11) DEFAULT NULL,
  `players_id` int(11) DEFAULT NULL,
  `time_won` int(11) DEFAULT NULL,
  `log` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `game_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replays`
--

LOCK TABLES `replays` WRITE;
/*!40000 ALTER TABLE `replays` DISABLE KEYS */;
INSERT INTO `replays` VALUES (1,3,34,'23','2015-07-18 12:02:45','2015-07-18 12:02:45',1),(2,3,34,'23','2015-07-18 12:02:49','2015-07-18 12:02:49',1),(3,3,34,'23','2015-07-18 12:02:52','2015-07-18 12:02:52',1),(4,3,34,'23','2015-07-18 12:02:52','2015-07-18 12:02:52',1),(5,3,34,'23','2015-07-18 12:02:53','2015-07-18 12:02:53',1),(6,3,34,'23','2015-07-18 12:02:54','2015-07-18 12:02:54',1),(7,3,34,'23','2015-07-18 12:03:15','2015-07-18 12:03:15',1),(8,3,34,'23','2015-07-18 12:03:39','2015-07-18 12:03:39',1),(9,3,34,'23','2015-07-18 12:03:45','2015-07-18 12:03:45',1),(10,3,34,'a23a23a23','2015-07-18 12:05:36','2015-07-18 12:05:36',1),(11,3,34,'a23a23a23','2015-07-18 12:05:45','2015-07-18 12:05:45',1);
/*!40000 ALTER TABLE `replays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'222','roma',9001,'2015-07-18 08:37:43','2015-07-18 08:37:43'),(2,'223','roma',9001,'2015-07-18 08:40:16','2015-07-18 08:40:16'),(3,'224','roma',9001,'2015-07-18 08:40:50','2015-07-18 08:40:50'),(4,'null','noob',0,'2015-07-18 11:44:30','2015-07-18 11:48:35'),(5,'null','Username',0,'2015-07-18 11:45:38','2015-07-18 11:45:38'),(6,'null','Username',0,'2015-07-18 11:45:38','2015-07-18 11:45:38'),(7,'null','Username',0,'2015-07-18 11:45:39','2015-07-18 11:45:39'),(8,'null','Username',0,'2015-07-18 11:45:40','2015-07-18 11:45:40'),(9,'null','Username',0,'2015-07-18 11:45:41','2015-07-18 11:45:41'),(10,'null','Username',0,'2015-07-18 11:45:43','2015-07-18 11:45:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-17 18:19:34

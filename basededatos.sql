CREATE DATABASE  IF NOT EXISTS `clasiune` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `clasiune`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: clasiune
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emailer`
--

DROP TABLE IF EXISTS `emailer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emailer` (
  `emailer_id` int unsigned NOT NULL AUTO_INCREMENT,
  `emailer_to` varchar(100) NOT NULL,
  `emailer_subject` varchar(100) NOT NULL,
  `emailer_text` text NOT NULL,
  `emailer_estado` int unsigned NOT NULL DEFAULT '2',
  PRIMARY KEY (`emailer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `productoId` int unsigned NOT NULL AUTO_INCREMENT,
  `productoDenominacion` varchar(200) NOT NULL,
  `productoDescripcion` varchar(200) DEFAULT NULL,
  `productoPrecio` decimal(12,4) unsigned NOT NULL,
  `productoEstado` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioId` int unsigned NOT NULL,
  PRIMARY KEY (`productoId`),
  KEY `usuarioId_idx` (`usuarioId`),
  CONSTRAINT `usuarioId` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`usuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `producto_ext`
--

DROP TABLE IF EXISTS `producto_ext`;
/*!50001 DROP VIEW IF EXISTS `producto_ext`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `producto_ext` AS SELECT 
 1 AS `productoId`,
 1 AS `productoDenominacion`,
 1 AS `productoDescripcion`,
 1 AS `productoPrecio`,
 1 AS `productoEstado`,
 1 AS `usuarioId`,
 1 AS `usuarioNombreApellido`,
 1 AS `usuarioNumero`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuarioId` int unsigned NOT NULL AUTO_INCREMENT,
  `usuarioNombreApellido` varchar(200) NOT NULL,
  `usuarioCorreo` varchar(100) NOT NULL,
  `usuarioContrasenha` text,
  `usuarioNumero` varchar(45) NOT NULL,
  PRIMARY KEY (`usuarioId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Final view structure for view `producto_ext`
--

/*!50001 DROP VIEW IF EXISTS `producto_ext`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `producto_ext` AS select `producto`.`productoId` AS `productoId`,`producto`.`productoDenominacion` AS `productoDenominacion`,`producto`.`productoDescripcion` AS `productoDescripcion`,`producto`.`productoPrecio` AS `productoPrecio`,`producto`.`productoEstado` AS `productoEstado`,`producto`.`usuarioId` AS `usuarioId`,`usuario`.`usuarioNombreApellido` AS `usuarioNombreApellido`,`usuario`.`usuarioNumero` AS `usuarioNumero` from (`producto` left join `usuario` on((`producto`.`usuarioId` = `usuario`.`usuarioId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-23 21:14:00

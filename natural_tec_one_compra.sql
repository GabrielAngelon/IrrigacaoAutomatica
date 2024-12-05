-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: natural_tec_one
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra` (
  `id_compra` int NOT NULL AUTO_INCREMENT,
  `tamanho` varchar(50) DEFAULT NULL,
  `area` varchar(50) DEFAULT NULL,
  `quantidade` int NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `metodo_pagamento` varchar(50) DEFAULT NULL,
  `id_funcionario` int DEFAULT NULL,
  `nome_funcionario` varchar(30) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `nome_user` varchar(100) DEFAULT NULL,
  `data_da_compra` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_compra`),
  UNIQUE KEY `endereco` (`endereco`),
  UNIQUE KEY `endereco_2` (`endereco`),
  UNIQUE KEY `endereco_3` (`endereco`),
  KEY `id_funcionario` (`id_funcionario`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionario` (`id_func`),
  CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbluser` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
INSERT INTO `compra` VALUES (137,'Kit Básico','Pomar',1,'rua teste, 123',49.99,'Dinheiro',3,'Pedro',NULL,'maria','2024-11-19 14:36:00'),(138,'Kit Completo','Pomar',1,'rua teste, 122',149.99,'CartaoCredito',1,'João',NULL,'maria','2024-11-19 14:37:00'),(139,'Kit Avançado','Pomar',2,'rua teste, 124',199.98,'CartaoCredito',2,'Maria',NULL,'gab','2024-11-19 14:38:00'),(140,'Kit Completo','Horta',2,'rua amaral, 144',299.98,'Pix',1,'João',NULL,'maria','2024-11-21 10:40:00'),(141,'Kit Completo','Pomar',2,'Rua papapa',299.98,'Boleto',NULL,'João',NULL,'Mariao','2024-12-12 08:18:00'),(142,'Kit Básico','',1,'',49.99,'',NULL,'Pedro',NULL,'',NULL);
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05 10:52:58

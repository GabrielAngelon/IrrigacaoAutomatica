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
-- Table structure for table `tbluser`
--

DROP TABLE IF EXISTS `tbluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbluser` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `nome_user` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `senha` varchar(16) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fone` varchar(30) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
INSERT INTO `tbluser` VALUES (1,'João Pereira Souza','joaop','senha321','joao@gmail.com','333330','Rua TYU'),(2,'Maria Oliveira','Mariao','senha456','mariaoliver@gmail.com','444-4444','Rua JKLM'),(3,'Fernando Costa','fernandoc','senha789','fernando@gmail.com','55555555','Rua MNO'),(4,'Beatriz Lima','beal','senha101','beatriz@gmail.com','66666666','Rua PQRjj'),(5,'Lucas Mendes','lucasm','senha102','lucas@gmail.com','71171','Rua STUAR'),(6,'Juliana Souza','julianas','senha103','juliana@gmail.com','88888888','Rua VWX'),(7,'Roberto Nunes','roberton','senha104','roberto@gmail.com','99999999','Rua YZ'),(8,'Clara Best','Clara','senha105','clara@gmail.com','101010','Rua ABCDE'),(9,'Marcelo Dias','marcelod','senha106','marcelo@gmail.com','11111112','Rua FGHIJ'),(10,'Sabrina Silva','sabrinas','senha107','sabrina@gmail.com','12121212','Rua KLMNO'),(20,'Pedrao','pedro','1234','pedro@gmail.com','11 45678987654','ealbert, 155'),(21,'ryan','ryan','1234','ryan@gmail.com','1234567890','casa do carai'),(22,'maria clara de souza','mariac','1234','mariac@gmail.com','11 98876654','nho amaral, 144'),(23,'eduardo constantino martrins','dudu','020507','dudu@gmail.com','119389289','quebrada nações'),(46,'gabriel','gab','1234','gab@email','11 9886897','rua gab, 123'),(47,'Maria Clara de Souza','maria','1234','mariaclara@gmail.com','11 98876763','rua amaral, 144'),(48,'isabela','isabela.silva','Isaa1007','isamartinsback@gmail.com','19999042499','rua amaral, 144'),(49,'caique','ferreira','181920','caiqueresposta@gmail,com','11933352116','R. Luiza Rampasso Meneguin, 54'),(50,'Khauã','Khauã','1234','nkhauacesard@gmail.com','11975432773','senai');
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
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

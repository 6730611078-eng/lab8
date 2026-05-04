CREATE DATABASE IF NOT EXISTS `supermarkett` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `supermarkett`;

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL COMMENT 'ชื่อสินค้า',
  `category` VARCHAR(100) NOT NULL COMMENT 'หมวดหมู่สินค้า',
  `price` DECIMAL(10, 2) NOT NULL COMMENT 'ราคาสินค้า',
  `stock` INT(11) NOT NULL DEFAULT '0' COMMENT 'จำนวนคงเหลือในคลัง',
  `image` VARCHAR(255) DEFAULT NULL COMMENT 'ชื่อไฟล์รูปภาพที่เก็บในโฟลเดอร์ uploads',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


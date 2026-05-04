1. เตรียมฐานข้อมูล (MySQL)
1.1 เปิด **XAMPP Control Panel** และ Start **Apache** กับ **MySQL**
1.2 เข้าไปที่ [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
1.3 สร้าง Database ใหม่ชื่อ `supermarkett`
1.4 Import ไฟล์ชื่อ `supermarkett` หรือสร้างตารางสินค้าดังนี้:
   CREATE TABLE items (
     id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     category VARCHAR(100),
     price DECIMAL(10, 2),
     stock INT,
     image VARCHAR(255)
   );

2. การติดตั้งโปรเจกต์
2.1 เปิด Terminal ใน VS Code และพิมพ์คำสั่งเพื่อติดตั้ง Library ที่จำเป็น:
    npm init -y สร้างไฟล์ 'package.json'
    npm install express ejs mysql2 multer body-parser สร้างไฟล์ 'package-lock.json'

3. รันโปรเจคต์
3.1 พิมพ์คำสั่งในterminal: node app.js
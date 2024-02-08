CREATE DATABASE scchatapp;

USE scchatapp;

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(20) NOT NULL,
  lastName VARCHAR(20) NOT NULL,
  userName VARCHAR(30) NOT NULL,
  phone VARCHAR(12),
  email VARCHAR(50) NOT NULL
)

INSERT INTO user (firstName, lastName, userName, phone, email) VALUES ("Digambar", "Kumbhar", "Artist", "9970036430", "digambarckumbhar299@gmail.com")

INSERT INTO user (firstName, lastName, userName, phone, email) VALUES ("Varsha", "Zagade", "Specter", "8459811806", "vzagade01@gmail.com")


CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sender INT NOT NULL,
  receiver INT NOT NULL,
  message VARCHAR(100) NOT NULL,
  time DATETIME NOT NULL
)

INSERT INTO messages (sender, receiver, message, time)
VALUES (1, 2, "Hi!", 10 );
INSERT INTO messages (sender, receiver, message, time)
VALUES (2, 1, "Hello", 10 );
INSERT INTO messages (sender, receiver, message, time)
VALUES (1, 2, "Good Morning", 10 );

SELECT * FROM user;
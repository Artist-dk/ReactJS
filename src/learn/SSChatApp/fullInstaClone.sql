CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture_url VARCHAR(255),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE messages (
  id INT PRIMARY KEY,
  sender_id INT,
  receiver_id INT,
  message_text TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (receiver_id) REFERENCES users(id)
);
CREATE TABLE friendships (
  user1_id INT,
  user2_id INT,
  status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
  PRIMARY KEY (user1_id, user2_id),
  FOREIGN KEY (user1_id) REFERENCES users(id),
  FOREIGN KEY (user2_id) REFERENCES users(id)
);
CREATE TABLE notifications (
  id INT PRIMARY KEY,
  user_id INT,
  notification_type ENUM('friend_request', 'message', 'like', 'comment'),
  content TEXT,
  is_read BOOLEAN DEFAULT false,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE posts (
  id INT PRIMARY KEY,
  user_id INT,
  caption TEXT,
  media_url VARCHAR(255),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE status_updates (
  id INT PRIMARY KEY,
  user_id INT,
  status_text TEXT,
  expiration_timestamp TIMESTAMP,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE explore_content (
  id INT PRIMARY KEY,
  post_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);
CREATE TABLE reels (
  id INT PRIMARY KEY,
  user_id INT,
  video_url VARCHAR(255),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);




INSERT INTO user (firstName, lastName, userName, phone, email) VALUES ("Digambar", "Kumbhar", "Artist", "9970036430", "digambarckumbhar299@gmail.com")

INSERT INTO user (firstName, lastName, userName, phone, email) VALUES ("Varsha", "Zagade", "Specter", "8459811806", "vzagade01@gmail.com")


INSERT INTO messages (sender, receiver, message, time)
VALUES (1, 2, "Hi!", 10 );
INSERT INTO messages (sender, receiver, message, time)
VALUES (2, 1, "Hello", 10 );
INSERT INTO messages (sender, receiver, message, time)
VALUES (1, 2, "Good Morning", 10 );

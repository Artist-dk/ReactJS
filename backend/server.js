const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scchatapp'
}) 

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/messages', (req, res) => {
  // Use a parameterized query to prevent SQL injection
  const sql = `SELECT 
  m.id AS message_id,
  m.message,
  m.time,
  sender.firstName AS sender_firstName,
  sender.lastName AS sender_lastName,
  receiver.firstName AS receiver_firstName,
  receiver.lastName AS receiver_lastName
FROM
  messages m
INNER JOIN
  user sender ON m.sender = sender.id
INNER JOIN
  user receiver ON m.receiver = receiver.id 
ORDER BY message_id ASC`;

  // Execute the query
  db.query(sql, (err, data) => {
    // Handle errors
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Send the result as JSON
    return res.json(data);
  });
});

app.get('/users', (req, res) => {
  // Use a parameterized query to prevent SQL injection
  const sql = `SELECT *
FROM user`;

  // Execute the query
  db.query(sql, (err, data) => {
    // Handle errors
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Send the result as JSON
    return res.json(data);
  });
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
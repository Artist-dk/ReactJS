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

app.get('/users', (req, res) => {
  // Use a parameterized query to prevent SQL injection
  const sql = 'SELECT * FROM messages';

  // Execute the query
  db.query(sql, (err, msgData) => {
    // Handle errors
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    let sql = 'SELECT * FROM user'
    db.query(sql, (e, userData)=> {
      if(e) {
        console.log('Error executing another query: '+err)
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      // combine data
      const combinedData = {
        msgData,
        userData
      }
      // Send the result as JSON
      return res.json(combinedData);
    })
  });
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// vulnerable_sql.js
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
});

function getUserInfo(userId) {
    // This is a vulnerable SQL query that can lead to SQL injection
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

// Example usage with user input
const userId = '1 OR 1=1'; // Malicious input
getUserInfo(userId);

const express = require('express');
const mysql = require('mysql2');

const usersRoutes = require('../routes/users');

const middlewareLogRequest = require('../middleware/logs');

const dbpool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'sql_myproject',
  password: 'root',
});

const app = express();

app.use(middlewareLogRequest);
 app.use(express.json());

 app.use((req, res, next) => {
  console.log('middleware two');
  next();
});

app.use('/users', usersRoutes);

app.use('/',(req, res) => {
  dbpool.execute('SELECT * FROM users', (err, rows) => {
    if(err){
      res.json({
        messsage: 'connection failed'
      })
    }

    res.json({
      message: 'connection success',
      data: rows,
    })
  });
});


app.listen(4000, () =>{
  console.log('Server berhasil di running di port 4000');
});
var express = require('express');

var app = express();

app.get('/', (req, res)=>{
  res.send('<h1>Ready to leave Seville?</h1> <form method="post" action="/submit"><input type=submit ></form>');
});

app.post('/submit', (req, res)=>{
  res.redirect('/canary');
});

app.get('/canary', (req, res)=>{
  res.send('Welcome to the Canary Islands!');
});




app.listen(3000, ()=>{
  console.log('Server running on port 3000!');
});

const express = require('express');//רפרנס למחלקה
const app = express();// מופע של המחלקה
const Workers = require('./Workers')
const PresenceEmployee = require('./PresenceEmployee')
const fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));




//פונקציה שתמיד מגיע אליה קודם ואז ממשיך הלאה כי יש לה נקסט
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   next();
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');
});

app.use(function (req, res, next) {
    fs.appendFile("log.txt",'Someone entered to help in time: '+ req.url,function(err){
        next();
    });
   
  });
  

app.use('/Workers',Workers);
app.use('/PresenceEmployee',PresenceEmployee);
app.use(function (req, res, next) {
    console.log("url not found");
    next();
   });

  



  

  
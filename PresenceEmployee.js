const express = require('express');//רפרנס למחלקה
const router  = express.Router()// מופע של המחלקה
const fs = require('fs');
const { static } = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'EmployeesBD';


router.use('/', function(req, res, next){
    console.log('arived attendance');
    next();
    })
//"WorkerIdP","date","start","end
router.post('/addJobDay', function(req, res){
    console.log("arived add Job Day.")
    MongoClient.connect(url, function(err, client) {
         if (err) console.log("can't connect!");
         else{
         const col = client.db(dbName).collection('PresenceEmployee');
          console.log("the WorkerIdP: "+req.body.WorkerIdP)
          req.body.date=new Date(req.body.date);
          col.insertOne(req.body
           ,function(err, answer){
              if(err) {
                console.log(err)
                 client.close();
                 return res.status(500).send(err);}
              else{
                  newAtt=req.body;
                  var path='attendaceFiles/'+newAtt.WorkerIdP;
                  if(!fs.existsSync(path))
                  {
                      fs.appendFile(path, JSON.stringify(newAtt), function(err){
                            if(err) {console.error(err);}
                      })
                  }
                  else
                  {
                      fs.readFile(path,'utf-8', (err, buffer) => {
                      if (err) return console.error('File read error: ', err);
                      if(buffer[buffer.length-1]==']')
                       var newValue = buffer.slice(0, buffer.length-1);
                      else
                      {
                          var newValue=buffer;
                          var arrayJson = [newValue.slice(0, 0), '[', newValue.slice(0)].join('');
                          newValue=arrayJson;
                      }
                      newValue+=',';
                      newValue+=JSON.stringify(newAtt);
                      newValue+=']';
                      fs.writeFile(path, newValue, err => {
                      if (err) return console.error('File write error:', err)
                      })
                      })
                    }
                 client.close();
                 return res.send(answer)
              }
          })
          console.log("succeed connect.");
        }
    });
})


router.post('/getMyWorkinghours', function(req ,res){
 
    var path='attendaceFiles/'+req.body.WorkerIdP;
    if (fs.existsSync(path)) {
     
        var array = fs.readFileSync(path).toString().split('\n');
      if(array=="")
      {
        res.send("אין שעות נוכחות")
      }
      else{
        res.send(array);}
      }
      else
      {
        res.send("אין שעות נוכחות")
      }
});


module.exports=router;
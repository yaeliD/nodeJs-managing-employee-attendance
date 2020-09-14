const express = require('express');//רפרנס למחלקה
const router  = express.Router()// מופע של המחלקה
const fs = require('fs');
const { static } = require('express');
const { worker } = require('cluster');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'EmployeesBD';
var w;

router.post('/getNamesAndFhone', function (req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    const col = client.db(dbName).collection('Workers');
    col.find({}).toArray(function(err, result) {
      if (err) {throw err;}
      else
     { res.send(result);}
    });
    });
  });

  router.get('/showemployee', function(req ,res){
    console.log("arived get worker details, try connect.");
    MongoClient.connect(url,  { useUnifiedTopology: true } ,function(err, client) {
    if (err) console.log("can't connect!");
    else{
      const col = client.db(dbName).collection('Workers');
      col.find({WorkerID:req.query.WorkerID}).toArray(function(err, result){
         if(err){
             console.log(err);
             res=err;
             client.close();
             return res.status(500).send(err);
         }
         else
         {
             console.log("the result:"+result[0].WorkerID);
             client.close();
             w=result[0];
             return res.send(result[0]);
         }
     });
     
    }
});
});

router.post('/addWorkers', function(req, res){
  console.log("arived add worker.")
  MongoClient.connect(url, function(err, client) {

      if (err) console.log("can't connect!");
      else{
        const col = client.db(dbName).collection('Workers');
       console.log("the WorkerID: "+req.body.WorkerID)
       col.insertOne(req.body
      ,function(err, answer){
           if(err) {
              client.close();
              return res.status(500).send(err);}
           else{
               newWorker=req.body;
               fs.readFile('employees.json','utf-8', (err, buffer) => {
                   if (err) return console.error('File read error: ', err)
                   var newValue = buffer.slice(0, buffer.length-1);
                   newValue+=',';
                   newValue+=JSON.stringify(newWorker);
                   newValue+=']';
                   fs.writeFile("employees.json", newValue, err => {
                   if (err) return console.error('File write error:', err)
                   })
                   })
              client.close();
              return res.send(answer)
           }
       })
       console.log("succeed connect.");
      }
  });
})

router.post('/deletWorkerByID', function (req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    const col = client.db(dbName).collection('Workers');
    var newValues = { $set: {isActive:false } };
    col.updateOne(req.body,newValues, function (err, result) {
      if (err) {
        console.log(err)
        res.status(500);
        res.send('ארעה שגיאה נסה שוב');
      }
       else {
        res.send(' עובד בעל ת"ז מספר '+req.body.WorkerID+" נמחק ");
      }
    });
  });
});
router.post('/UpdateWorkers', function (req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    const col = client.db(dbName).collection('Workers');
    //var newValues = req.body;
    var newValues = { $set: {WorkerID:req.body.WorkerID, WorkerFName:req.body.WorkerFName, WorkerLName:req.body.WorkerLName, WorkerAddres:req.body.WorkerAddres,WorkerFhone:req.body.WorkerFhone,WorkerMail:req.body.WorkerMail} };
    col.updateOne(w,newValues, function (err, result) {
      if (err) {
        //console.log(err)
        res.status(500);
        res.send('ארעה שגיאה נסה שוב');
      } else {
        res.send(' עובד בעל ת"ז מספר '+req.body.WorkerID+" עודכן ");
      }
    });
  });
});

module.exports= router;
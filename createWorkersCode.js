
db.createCollection('workers');
db.createCollection('PresenceEmployee');

function randName(){
    var letters="abcdwfghijklmnopqrstuvwxyz";
    var name="";
    var length=Math.floor(Math.random()*10)+1;
    for(var i=0;i<length;i++)
    {var index=Math.floor(Math.random()*letters.length);
    name+=letters[index];}
    return name;}
    
function randId(){
        var letters="0123456789";
        var name="";
        var length=9;
        for(var i=0;i<length;i++)
        {var index=Math.floor(Math.random()*letters.length);
        name+=letters[index];}
        return name;}
        
function randTel(){
            var letters="0123456789";
            var name="";
            var length=10;
            for(var i=0;i<length;i++)
            {var index=Math.floor(Math.random()*letters.length);
            name+=letters[index];}
            return name;}
            
function randMail(){
                var letters="abcdwfghijklmnopqrstuvwxyz098";
                var name="";
                var length=Math.floor(Math.random()*12)+4;
                for(var i=0;i<length;i++)
                {var index=Math.floor(Math.random()*letters.length);
                name+=letters[index];}
                name+="@gmail.com";
                return name;}
    
    for(var i=0;i<100;i++)
    {
    var WorkerID=randId();
    var WorkerFName=randName();
    var WorkerLName=randName();
    var WorkerAddres=randName();
    var WorkerFhone=randTel();
    var WorkerMail=randMail();
    var isActive=true;
    
    var anObj = { WorkerID: WorkerID, WorkerFName: WorkerFName,  WorkerLName:WorkerLName, WorkerAddres:WorkerAddres, WorkerFhone:WorkerFhone, WorkerMail:WorkerMail, isActive:isActive};
    workersCollection.insertOne({anObj})
    } 
    
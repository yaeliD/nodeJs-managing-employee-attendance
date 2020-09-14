
    
class workersonly{
    constructor(WorkerID, WorkerFName, WorkerLName, WorkerAddres, WorkerFhone, WorkerMail){
        this.WorkerID=WorkerID;
         this.WorkerFName=WorkerFName;
         this.WorkerLName=WorkerLName;
         this.WorkerAddres=WorkerAddres;
         this.WorkerFhone=WorkerFhone;
         this.WorkerMail=WorkerMail;
         this.isActive=true;
    }

    get IWorkerID(){
        return this.WorkerID;
    }
    set IWorkerID(IWorkerID){
        this.WorkerID=IWorkerID;
    }

    get FirstName(){
        return this.WorkerFName;
    }
    set FirstName(FirstName){
        this.WorkerFName=FirstName;
    }

    get LastName(){
        return this.WorkerLName;
    }
    set LastName(LastName){
        this.WorkerLName=LastName;
    }

    get Address(){
        return this.WorkerAddres;
    }
    set Address(Address){
        this.WorkerAddres=Address;
    }

    get Tel(){
        return this.WorkerFhone;
    }
    set Tel(Tel){
        this.WorkerFhone=Tel;
    }

    get Mail(){
        return this.WorkerMail;
    }
    set Mail(Mail){
        this.WorkerMail=Mail;
    }

    get IsActive(){
        return this.isActive;
    }
    set IsActive(IsActive){//check it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        this.isActive=IsActive;
    }

    //קבלת רשימת שמות וטלפונים של כל העובדים, 


    //קבלת הפרטים המלאים עבור עובד בודד,


    // מחיקת עובד,


    // הוספת עובד


     //ועדכון עובד

     
} 

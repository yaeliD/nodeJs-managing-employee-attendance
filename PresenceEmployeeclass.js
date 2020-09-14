class PresenceEmployee{
    constructor(WorkerIdP,date, start, end){
        this.WorkerIdP=WorkerIdP;
        this.date=date; 
         this.start=start;
         this.end=end;
        
    }
    get ForWorker(){
        return this.WorkerIdP;
    }
    set ForWorker(ForWorker){//return the name?
        this.WorkerIdP=ForWorker;
    }
    get Date(){
        return this.date;
    }
    set Date(Date){
        this.date=Date;
    }

    get Start(){
        return this.start;
    }
    set Start(Start){
        this.start=Start;
    }

    get End(){
        return this.End;
    }
    set End(End){
        this.end=End;
    }


    
} 

export class User {
    private userid:string;
    private username: string;
    private sessionid: string;
    
    public getUserid(){
        return this.userid;
    }
    
    public getUsername(){
        return this.username;
    }
    public getSessionid(){
        return this.sessionid;
    }
    public setSessionid(sessionid:string){
        this.sessionid = sessionid;
    }
    
    constructor(userid:string,username:string){
        this.userid = userid;
        this.username = username;        
    }
}
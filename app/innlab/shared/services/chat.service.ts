import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class ChatService {
    
  constructor (private http: Http) {}
  
  // private chatUrl = '/ai';  // URL to web API  
  
  getAnswer (Params: any): Promise<any> {
    let body = JSON.stringify({ Params });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
                    
    return this.http.post(Params.chatUrl, body, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  } 
  
  
      
  private extractData(res: Response) {
    let body = res.json();
    console.log(body.data)
    return body.data || { };
  }
  
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
    
}  

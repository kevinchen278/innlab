import {Component} from '@angular/core';
import 'rxjs/Rx';
import {Subject,Subscription} from 'rxjs/Rx';

export class EmitterService {
  private events = new Subject();
  subscribe (next:any,error:any,complete:any): Subscriber {
    return this.events.subscribe(next,error,complete);
  }
  next (event:any) {
    this.events.next(event);
  }
}
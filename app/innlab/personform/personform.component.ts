import {Component, Output, EventEmitter} from '@angular/core';
import {EmitterService} from '../shared/services/emitterservice';

export interface IPersonInfo {
	personInfo?: {
		name: string,
		contact:string,
		email:string,
		address: string,
		zip:string
	}
}

export class PersonFormComponentBuilder{
	
   public CreateAutoFormComponent(injectDirectives: any[]):any {
	@Component({
		selector: "div-person-form",
		templateUrl: `./app/innlab/personform/personform.component.html`,
		styleUrls: ['./app/innlab/personform/personform.component.css'],
		directives: injectDirectives,
	})
	
	class PersonFormComponent implements IPersonInfo{
		public personInfo: {
					name: string,
					contact:string,
					email:string,
					address: string,
					zip:string
			}
		
		
		onSend(event:any){
			this.emitter.next({type:'person',personInfo:this.personInfo});
		}
		
		constructor(private emitter: EmitterService){}
		
	}
	
	return PersonFormComponent;
   }
}


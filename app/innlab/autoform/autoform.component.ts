import {Component, Output, EventEmitter} from '@angular/core';
import {EmitterService} from '../shared/services/emitterservice';

export interface IAutoInfo {
	carInfo?: {
		state: string;
		make:string;
		model:string;
		year: string;
	}
}

export class AutoFormComponentBuilder{
	
   public CreateAutoFormComponent(injectDirectives: any[]):any {
	@Component({
		selector: "div-auto-form",
		templateUrl: `./app/innlab/autoform/autoform.component.html`,
		styleUrls: ['./app/innlab/autoform/autoform.component.css'],
		directives: injectDirectives
	})
	
	class AutoFormComponent implements IAutoInfo{
		public carInfo: {
			state:string;
			make:string;
			model:string;
			year: string;	
		}
		constructor(private emitter: EmitterService){
		}
		onSend(event:any){
			this.emitter.next({type:'auto',carInfo: this.carInfo});
		}
	}
	
	return AutoFormComponent;
   }
}


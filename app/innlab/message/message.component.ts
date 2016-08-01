import {Component} from '@angular/core';

export interface IMessage {
	isRobotMessage?: boolean;
	message: string;
}

export class MessageComponentBuilder{
	
   public CreateMessageComponent(injectDirectives: any[]):any {
	@Component({
		selector: "message-div",
		templateUrl: `./app/innlab/message/message.component.html`,
		styleUrls: ['./app/innlab/message/message.component.css'],
		directives: injectDirectives,
	})
	
	class MessageComponent implements IMessage{
		public isRobotMessage: boolean;
		public message: string;
	}
	
	return MessageComponent;
   }
}


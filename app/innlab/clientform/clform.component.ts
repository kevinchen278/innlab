import {Component, OnInit, ElementRef, Renderer, ViewChild, Input} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import {ChatService} from '../shared/services/chat.service';


@Component({
	templateUrl: `./app/innlab/clientform/clform.component.html`,
	styleUrls: ['./app/innlab/clientform/clform.component.css'],
	providers: [ChatService]
})

export class ChatComponent implements OnActivate {
	
	@ViewChild('content') defaultContent: ElementRef;
	errorMessage:string = "";
	messages: Array<string> =[];
	answerMessage:string = '';
	// showChatbox: boolean = true;
	
	@Input() showChatbox: boolean;
	
	
	// OnActivate() {
	// 	this.showChatbox = true;
	// }
	
	ngAfterViewInit() {
	}	
	
	constructor(private chatService: ChatService){
		this.showChatbox = true;
		console.log(this.showChatbox)
		this.messages.push("hello, this is insbot, welcome ...")
	};
	
	onKeypress(event: KeyboardEvent){
		let message: string = (<HTMLInputElement>event.target).value;
		
		if (!message) { return; }
		if (event.keyCode === 13) {
			(<HTMLInputElement>event.target).value = "";
			
			this.messages.push(message);
			var objDiv = document.getElementById("mycontent");
			objDiv.scrollTop = objDiv.scrollHeight;							   
		
			this.chatService.getAnswer(message)
					.then(
		                   answerMessage  => {
							   this.answerMessage = answerMessage;
								this.messages.push(this.answerMessage);							
								var objDiv = document.getElementById("mycontent");
								objDiv.scrollTop = objDiv.scrollHeight;							   
							},
		                   error =>  this.errorMessage = <any>error
				     );
		}
	}	
	
	onPlay() {
		var audio = new Audio();
			audio.src = "/audio/me.mp3";
			audio.load();
			audio.play();
	}
	
	
	onClose(){
		this.showChatbox = false;
		console.log("close");		
	}
	
}
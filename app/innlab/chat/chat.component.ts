import {Component, OnInit, ElementRef, Renderer, ViewChild, Input, ComponentResolver,ViewContainerRef, ComponentFactory} from '@angular/core'; 
import {FORM_DIRECTIVES} from "@angular/common";
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import {AutoFormComponentBuilder, IAutoInfo} from '../autoform/autoform.component';
import {PersonFormComponentBuilder, IPersonInfo} from '../personform/personform.component';
import {MessageComponentBuilder, IMessage} from '../message/message.component';
import {ChatService} from '../shared/services/chat.service';
import {VoiceService} from '../shared/services/voice.service';
import {EmitterService} from '../shared/services/emitterservice';
import {User} from '../shared/services/user';
import {Observable} from 'rxjs/Rx';

@Component({
	selector: "chat-div",
	inputs: ['bottype'],
	templateUrl: `./app/innlab/chat/chat.component.html`,
	styleUrls: ['./app/innlab/chat/chat.component.css'],
	providers: [VoiceService, ChatService, AutoFormComponentBuilder, MessageComponentBuilder,PersonFormComponentBuilder,EmitterService],
	directives: []
})

export class ChatComponent implements OnInit {
	private  user : User; 
	private haveSessionid: boolean=false;
	private index: number=0;
	private subscription:any;
	public  bottype: number;
	private botName: string;
	private chatUrl: string;
	private sayHello: boolean = true;
	private onRecording: boolean = false;
		
	@Input() showChatIcon: boolean = false;
	@Input() imgPos: number;
	
	
	constructor(
		private chatService: ChatService,
		private voiceService: VoiceService,
		protected componentResovlver: ComponentResolver,
		protected autoFormComponentBuilder: AutoFormComponentBuilder,
		protected personFormComponentBuilder: PersonFormComponentBuilder,
		protected messageComponentBuilder: MessageComponentBuilder,
		private emitter: EmitterService,
		private elementRef: ElementRef
		
	){
		this.user = new User('0001','kevin');
		
		console.log(this.user);
		console.log(this.imgPos);
				
		this.subscription = this.emitter.subscribe(msg=>{
			if (msg.type === "auto") {
				this.formSubmit(1);
			}
			if (msg.type === "person") {
				this.formSubmit(2);
			}
			
			if (msg.type==="updateRec"){
				console.log("updateRec:"+ msg.value);
			}
			
			if (msg.type==="speakScript"){
				if (msg.value.trim()) {
					console.log("speakScript:"+ msg.value);
					this.sendMessage(false, msg.value);
					this.talkTobot(msg.value);
				}
			}
		},null,null);
	};
	
	
	
	
	
	public carInfo: {
		state:string,
		make:string,
		model:string,
		year: string
	}

	public personInfo: {
		name: string,
		contact:string,
		email:string,
		address: string,
		zip:string
	}
	
	@ViewChild('contentContainer', {read:ViewContainerRef})
	protected contentTarget:ViewContainerRef;
	
	errorMessage:string = "";
	answerMessage:string = '';
	
	clearMessage(){
		console.log(this.contentTarget);
		// this.contentTarget.clear();
	}	
	
	public ngOnInit(){
		this.carInfo = {
			state: "new jersey",
			make: "toyota",
			model: "camry",
			year: '2015'
		};
		
		this.personInfo = {
			name: "Smith John",
			contact:"609-358-8888",
			email:"test@tcs.com",
			address: "379 Thornal Street, Edison,NJ",
			zip:"08123"
		}
	}	
		
	
	formSubmit(formIdx:number){
		if (formIdx === 1) {
			this.talkTobot("auto quote 600 6");			
		};
		
		if (formIdx === 2) {
			this.talkTobot("PERSONAL INFORMATION " + this.personInfo.name);			
		} 
		
	}	
			
	onSendForm(formIdx:number){
		if (formIdx === 1) {
			let autoFormComponent = this.autoFormComponentBuilder
							.CreateAutoFormComponent(FORM_DIRECTIVES);
			this.componentResovlver
				.resolveComponent(autoFormComponent)
				.then((factory: ComponentFactory<IAutoInfo>)=>
				{
					let autoFormComponent = this.contentTarget.createComponent(factory,this.index);
					this.index++;
					let component: IAutoInfo = autoFormComponent.instance;
					component.carInfo = this.carInfo;
					this.scrollChatDiv(1000);				
				})

		}
		
		if (formIdx === 2) {
			let personFormComponent = this.personFormComponentBuilder
							.CreateAutoFormComponent(FORM_DIRECTIVES);
			this.componentResovlver
				.resolveComponent(personFormComponent)
				.then((factory: ComponentFactory<IAutoInfo>)=>
				{
					let personFormComponent = this.contentTarget.createComponent(factory,this.index);
					this.index++;
					let component: IPersonInfo = personFormComponent.instance;
					component.personInfo = this.personInfo;
					this.scrollChatDiv(1000);
				})
		}
	}
	
	talkTobot(message:string){
		switch (this.bottype) {
			case 1:
				this.chatUrl = "/pb";
				this.botName = "dybot"
				break;
			case 2:
				this.chatUrl = "/pb";
				this.botName = "dybot2"
				break;
			case 3:
				this.chatUrl = "/ai";
				this.botName = ""
				break;
		}	
		
		let Params = {message:message,
						client_name: this.user.getUserid(),
						sessionid:this.user.getSessionid(),
						chatUrl: this.chatUrl,
						botName: this.botName
					};	
	  console.log("Parmas:");
	  console.log(Params);
		
		this.chatService.getAnswer(Params)
				.then(
						answerMessage  => this.processAnswerMessage(answerMessage),
						error =>  this.errorMessage = <any>error
					);
	}
	
	scrollChatDiv(mseconds: number){
					setTimeout(function () {
						var objDiv = document.getElementById("mycontent");
						objDiv.scrollTop = objDiv.scrollHeight;	
					}, mseconds);
	}	

	
	sendMessage(isRobotMessage:boolean, message:string){
		let Params = { message: message, filename: Date.now().toString(), chatUrl: '/tts'}
		
		if (isRobotMessage) {
			this.chatService.getAnswer(Params)  //get Voice
					.then(
								() => this.playAudio(Params.filename),
								error =>  this.errorMessage = <any>error
					);			
		}	
 		
		let messageComponent = this.messageComponentBuilder
								 .CreateMessageComponent(FORM_DIRECTIVES);
	   this.componentResovlver
	   	   .resolveComponent(messageComponent)
		   .then((factory: ComponentFactory<IMessage>)=>
		   {
			   let messageComponent = this.contentTarget.createComponent(factory,this.index);
			   this.index++;
			   let component: IMessage = messageComponent.instance;
			   component.isRobotMessage = isRobotMessage;
			   component.message = message; 
		   });
		   
		this.scrollChatDiv(1000);		   
	}
			
	
   ngOnDestroy(){
   	 this.subscription.unsubscribe();
   }
	
	processAnswerMessage(ans:any){
		let msg: string;
		console.log("answerMessage:");
		console.log(ans);
		if (!this.haveSessionid) {
			this.user.setSessionid(ans.sessionId);
			this.haveSessionid = true;
		}
				
		if (this.bottype == 3) {
			msg =  ans.result.fulfillment.speech;
			this.sendMessage(true, msg);
		} else {
			msg =  ans.responses.join(";");
			
			if (ans.requires.length === 0) {
				if (/match failed/i.test(msg)) {
					this.sendMessage(true, "context setup pending.");
				} else {
					this.sendMessage(true, msg);
				}
			} else {
				let param =  msg.match(/\{{(.*?)\}}/)[1];
				this.sendMessage(true, msg.split("{{")[0]);
				
				if (param === "input_form_auto_info") {
					this.onSendForm(1);			
				} else if (param === "input_form_person_info") {
					this.onSendForm(2);			
				}
			}
		}

	}
	
	
	onKeypress(event: KeyboardEvent){
		let message: string = (<HTMLInputElement>event.target).value;
		let Params = {};
		
		if (!message) { return; }
		if (event.keyCode === 13) {
			(<HTMLInputElement>event.target).value = "";
			this.sendMessage(false, message);
			this.talkTobot(message);
		}
	}	
	
	
	onPlay() {
		var audio = new Audio();
			audio.src = "/audio/me.mp3";
			audio.load();
			audio.play();
	}
	
	private playAudio(filename:string) {
		var audio = new Audio();
			audio.src = "/audio/"+filename+".wav";
			audio.load();
			audio.play();
	}
	
	
	toggleChat(){
		this.showChatIcon = !this.showChatIcon;
		if (this.showChatIcon && this.sayHello) {
			this.sendMessage(true,"Hello there my name is Cathy. I am part of the Customer care team at ABC Insurance.");
			this.sayHello = false;
		}
		console.log(this.showChatIcon);
	}
	
	speakClick(){
		// this.onRecording = !this.onRecording;
		this.voiceService.switchRecognition();
		// this.onRecording ? this.voiceService.startRecognition(): this.voiceService.stopRecognition; 		
	}
	
	
	
}
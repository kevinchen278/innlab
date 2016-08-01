// import { Component }  from '@angular/core';
// import { NgClass } from '@angular/common';

// import { Mail }  from "../shared/mail.model";
// import { MailList }  from "../shared/mail-list.model";

// @Component({
// 	templateUrl: `./app/innlab/home/home.component.html`,
// 	styleUrls: ['./app/innlab/home/home.component.css'],
// 	directives: [MailListDirective, NgClass],
// 	providers: []
// })

// export class HomeComponent{
// 	private mailList = {};
// 	private selectedBox: string ='';
// 	account: string;
// 	inboxCount: string;
	

// 	onBoxChange(boxName:string) {
// 		if (this.selectedBox !== boxName) {
// 			this.selectedBox = boxName;
// 			this.mailList.setCurrBox(boxName);
// 			this.account = "Adams Smith";
// 			this.inboxCount = this.mailList.getInboxCount();
// 			this.sentCount = this.mailList.getSentCount();
// 			this.selectedMailList = this.mailList.getMailList('inbox');
// 			this.isInboxSelected = this.selectedBox === 'inbox';
// 		}
// 	}

// 	constructor() { 	
// 		this.mailList = new MailList('inbox',500,289);
// 		this.onBoxChange('inbox');
// 		this.inboxClick = () => {
// 			this.onBoxChange('inbox');
// 		};
// 		this.sentClick = () => {
// 			this.onBoxChange('sent');
// 		};
// 	}

// }


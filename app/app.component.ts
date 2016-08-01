import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent, ChatComponent } from './innlab/index';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';
import { HTTP_PROVIDERS } from '@angular/http';
// import {CollapseDirective, DROPDOWN_DIRECTIVES} from 'bootstrap';


@Component({
	selector: 'my-app',
	templateUrl: `./app/app.component.html`,
	styleUrls:  ['./app/app.component.css'],
	directives: [ROUTER_DIRECTIVES, CollapseDirective, DROPDOWN_DIRECTIVES, CAROUSEL_DIRECTIVES, ChatComponent],
  providers: [ HTTP_PROVIDERS ]
})

@Routes([
		// { path: '/', component: HomeComponent },
])


export class AppComponent implements OnInit {
	public isCollapsed:boolean = true;
	
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }	
	
	public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];
 
  public addSlide():void {
    this.slides.push({image:'../../images/IoT-insights.jpg'})
    this.slides.push({image:'../../images/Leading-bank-improves-compliance.jpg'})
    this.slides.push({image:'../../images/Next-gen-data-security.jpg'})
	}
  
  private showChatbox: boolean = true;
  	
	 public constructor(private router: Router) {
      this.addSlide();
   }
	
	
	ngOnInit() {
		this.router.navigate(['/']);
	}
}



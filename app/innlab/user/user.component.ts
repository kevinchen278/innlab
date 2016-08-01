import {Component, OnInit} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';


@Component({
	templateUrl: `./app/innlab/user/user.component.html`,
	styleUrls: [`./app/innlab/user/user.component.css`]
})

export class UserComponent implements OnActivate {

	constructor(private router: Router) { }
	onEnter() {
		this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
	};
	onLogout(){
		this.router.navigate(['/logout']);
	}
}




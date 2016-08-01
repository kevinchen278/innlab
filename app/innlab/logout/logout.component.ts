import {Component, OnInit} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

@Component({
	templateUrl: `./app/innlab/logout/logout.component.html`,
	styleUrls: [`./app/innlab/logout/logout.component.css`],
})

export class LogoutComponent implements OnActivate {

	constructor(private router: Router){ }
	onBackHome() {
		this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
	}

}


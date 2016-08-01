import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';


@Component({
	templateUrl: `./app/innlab/demod/demod.component.html`,
	styleUrls: ['./app/innlab/demod/demod.component.css']
})


export class DemodComponent implements OnActivate {
    	myLayout(el:ElementRef) {
		
		let container = el.getClientRects()[0];
		
		let c_width = container.width,   //container-height
		    c_height = container.height,
			
			h_width = 150,   //hex size
			h_height = 86,
			w_dist = 6,     
			h_dist = 46;
			
	
	}

	
	
	onResize(event:any, el: ElementRef) {
		this.myLayout(el);
	}
	
	
	ngOnInit( el:ElementRef) {
		el = document.getElementById('container4');
		this.myLayout(el);
        // this.onResize(null,this.el);
    }	
	

}
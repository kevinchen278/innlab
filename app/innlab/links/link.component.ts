import {Component, OnInit, ElementRef, Renderer,  Output, EventEmitter} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';


@Component({
	templateUrl: `./app/innlab/links/link.component.html`,
	styleUrls: ['./app/innlab/links/link.component.css']
})


export class LinkComponent implements OnActivate {
	
	// titleSentence = 'I am an executed title';
	
	// myFontSize = 11;
	// myClick(element: ElementRef) {
		
	// 	console.log(element.style.width);
	
	// 	if (this.myFontSize == 11)
	// 		this.myFontSize = 20;
	// 	else
	// 		this.myFontSize = 11;
	// }
	
	// private let hex1 = {
	// 	  			left: 100,
	// 		}
	
	// @Output() onload = new EventEmitter();
	
			

	myLayout(el:ElementRef) {
		
		// let container = el.getClientRects()[0];
		
		// let c_width = container.width,   //container-height
		//     c_height = container.height,
			
		// 	h_width = 150,   //hex size
		// 	h_height = 86,
		// 	w_dist = 6,     
		// 	h_dist = 46;
			
		// if (c_width>639) {
		// 	let pad_left = c_width/2 - (h_width + w_dist) * 4/2,
		// 	    level_top1 = 55,
		// 		level_height = h_height + h_dist + w_dist/2,
		// 		row_width = h_width + w_dist;
			
		// 	//layer 1
			
		// 	el.children[0].style.left = pad_left ;
		// 	el.children[0].style.top = level_top1;
			
		// 	el.children[1].style.left = pad_left + row_width;
		// 	el.children[1].style.top = level_top1;

		// 	el.children[2].style.left = pad_left + 2*row_width;
		// 	el.children[2].style.top = level_top1;

		// 	el.children[3].style.left = pad_left + 3*row_width;
		// 	el.children[3].style.top = level_top1;

		// 	//layer 2

		// 	el.children[4].style.left = pad_left + 0.5*row_width ;
		// 	el.children[4].style.top = level_top1 + level_height ;

		// 	el.children[5].style.left = pad_left + 1.5*row_width;
		// 	el.children[5].style.top = level_top1 + level_height ;

		// 	el.children[6].style.left = pad_left + 2.5*row_width;
		// 	el.children[6].style.top = level_top1 + level_height ;
			
		// 	//layer 3

		// 	el.children[7].style.left = pad_left + row_width ;
		// 	el.children[7].style.top = level_top1 + 2 * level_height;

		// 	el.children[8].style.left = pad_left + 2 * row_width ;
		// 	el.children[8].style.top = level_top1 + 2 * level_height ;
			
		// 	//lay-4
		// 	pad_left += row_width/2;
		// 	el.children[9].style.left = pad_left + 1*row_width;
		// 	el.children[9].style.top = level_top1 + 3 * level_height + 13;			


		// } else if (c_width > 480 ) {
		// 	let pad_left = c_width/2 - (h_width + w_dist) * 3/2,
		// 	    level_top1 = 55,
		// 		level_height = h_height + h_dist + w_dist/2,
		// 		row_width = h_width + w_dist;
			
		// 	//layer 1
			
		// 	el.children[0].style.left = pad_left ;
		// 	el.children[0].style.top = level_top1;
			
		// 	el.children[1].style.left = pad_left + row_width;
		// 	el.children[1].style.top = level_top1;

		// 	el.children[2].style.left = pad_left + 2*row_width;
		// 	el.children[2].style.top = level_top1;


		// 	//layer 2
		// 	el.children[3].style.left = pad_left + 0.5*row_width;
		// 	el.children[3].style.top = level_top1 + level_height ;

		// 	el.children[4].style.left = pad_left + 1.5*row_width ;
		// 	el.children[4].style.top = level_top1 + level_height ;
			
		// 	//lay-3
		// 	el.children[9].style.left = pad_left + 1*row_width;
		// 	el.children[9].style.top = level_top1 + 2 * level_height + 13;			
			
			
		// 	//lay-4

		// 	el.children[5].style.left = pad_left + 0.5*row_width;
		// 	el.children[5].style.top = level_top1 + 3*level_height ;

		// 	el.children[6].style.left = pad_left + 1.5*row_width;
		// 	el.children[6].style.top = level_top1 + 3*level_height ;
			
		// 	//layer 5

		// 	el.children[7].style.left = pad_left  ;
		// 	el.children[7].style.top = level_top1 + 4 * level_height;

		// 	el.children[8].style.left = pad_left + 1 * row_width ;
		// 	el.children[8].style.top = level_top1 + 4 * level_height ;
			
		// 	//lay-4
			
		// } else if (c_width>336) {

		// 	let pad_left = c_width/2 - (h_width + w_dist) * 2/2,
		// 	    level_top1 = 55,
		// 		level_height = h_height + h_dist + w_dist/2,
		// 		row_width = h_width + w_dist;
			
		// 	//layer 1
			
		// 	el.children[0].style.left = pad_left ;
		// 	el.children[0].style.top = level_top1;
			
		// 	el.children[1].style.left = pad_left + row_width;
		// 	el.children[1].style.top = level_top1;


		// 	//lay 2
		// 	el.children[2].style.left = pad_left + 0.5*row_width;
		// 	el.children[2].style.top = level_top1 + level_height;


		// 	//layer 2
		// 	el.children[3].style.left = pad_left ;
		// 	el.children[3].style.top = level_top1 + 2*level_height ;

		// 	el.children[4].style.left = pad_left + 1*row_width ;
		// 	el.children[4].style.top = level_top1 +2*level_height ;
			
		// 	//lay-3
		// 	el.children[9].style.left = pad_left + 0.5*row_width;
		// 	el.children[9].style.top = level_top1 + 3 * level_height + 13;			
			
			
		// 	//lay-4

		// 	el.children[5].style.left = pad_left
		// 	el.children[5].style.top = level_top1 + 4*level_height ;

		// 	el.children[6].style.left = pad_left + 1*row_width;
		// 	el.children[6].style.top = level_top1 + 4*level_height ;
			
		// 	//layer 5

		// 	el.children[7].style.left = pad_left + 0.5*row_width;
		// 	el.children[7].style.top = level_top1 + 5 * level_height;

        //     //level 6
		// 	el.children[8].style.left = pad_left ;
		// 	el.children[8].style.top = level_top1 + 6 * level_height ;
			
			
		// }
		
		
	}
	
	onResize(event:any, el: ElementRef) {
		this.myLayout(el);
	}
	
	
	ngOnInit( el:ElementRef) {
		el = document.getElementById('container1');
		this.myLayout(el);
        // this.onResize(null,this.el);
    }


	constructor(private router: Router, public el:ElementRef){		 
	}
	onBackHome() {
		// this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
	}
	




}
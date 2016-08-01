import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import {provide} from "@angular/core";
import {enableProdMode} from '@angular/core';
// import {APP_VIEW_POOL_CAPACITY} from './node_modules/angular2/src/core/linker/view';


// import {LocationStrategy, HashLocationStrategy} from 'node_modules/angular2/platform/common';
// import {APP_BASE_HREF} from '@angular/router';

enableProdMode();

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	// provide(LocationStrategy, { useClass: HashLocationStrategy })
	// provide(APP_BASE_HREF, { useValue: '/' })
	// provide(APP_VIEW_POOL_CAPACITY, {useValue: 0})
]);


// bootstrap(AppComponent, [provide(APP_VIEW_POOL_CAPACITY, {useValue: 0}]).catch(err => console.error(err));


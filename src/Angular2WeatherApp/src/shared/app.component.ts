import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

import {HomeComponent, LoginComponent} from '../index';


@Component({
    selector: 'weather-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]

})

@RouteConfig([
    { path: '/home/...', as: 'Home', component: HomeComponent },
    { path: '/login', as: 'Login', component: LoginComponent, useAsDefault: true }
])
export class AppComponent {
    constructor() {
        console.log('in app.component');
    }
}
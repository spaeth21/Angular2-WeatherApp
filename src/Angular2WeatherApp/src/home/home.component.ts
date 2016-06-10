import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';


import { DashboardComponent, Constants, NavComponent, SidebarComponent, SideBarItems , ApiService} from '../index';


@Component({
    selector: 'safety-home',
    templateUrl: Constants.TEMPLATE_PATH + 'home/home.component.html',
    directives: [ROUTER_DIRECTIVES, NavComponent, SidebarComponent],
    providers: [ApiService]

})

@RouteConfig([
    { path: '/', as: 'Dashboard', component: DashboardComponent, useAsDefault: true },
])

export class HomeComponent {
    menu: Array<SideBarItems> = [{
        link: 'Dashboard',
        logo: true,
        img: './images/angular2icon.png',
        dropdown: false
    },
        {
            link: 'Dashboard',
            name: 'Dashboard',
            icon: 'fa-dashboard',
            dropdown: false
        }
    ];
    sideBarPosition: boolean;
    defaultContent: any = true;
    constructor() {
        this.sideBarPosition = false;
        this.defaultContent = false;
    }
    
    onSideBarAction(event: boolean) {
        this.sideBarPosition = event;
        this.defaultContent = event;
    }

}
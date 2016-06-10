import {Component, Output, Input, EventEmitter, OnChanges} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';

import {Constants, SideBarItems} from '../index';

@Component({
    selector: 'weather-sidebar',
    templateUrl: Constants.TEMPLATE_SHARED + 'sidebar/sidebar.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: [Constants.TEMPLATE_SHARED + 'sidebar/sidebar.component.css']
})

export class SidebarComponent implements OnChanges {
    @Input() menuItems: Array<SideBarItems>;
    sideBarOpen: boolean = false;

    @Output() toggleValue = new EventEmitter();

    constructor(public router: Router) {
    }


    ngOnChanges() {
    }

    onToggleSideBar(toggle) {
        this.sideBarOpen = toggle;
        this.toggleValue.emit(this.sideBarOpen);
    }


    checkActive(links) {
        for (let i = 0; i < links.length; i++) {
            if (this.router.isRouteActive(this.router.generate([links[i].link])))
                return true;
        }
        return false;
    }

}
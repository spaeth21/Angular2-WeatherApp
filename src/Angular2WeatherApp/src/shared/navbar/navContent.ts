


import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';

import { Constants} from '../index';


@Component({
    selector: 'weather-navbar',
    templateUrl: Constants.TEMPLATE_SHARED + 'navbar/navContent.html'
})

export class NavComponent implements OnInit, OnChanges{
    @Input() sideBarOpen: boolean;

    //menu: Array<Object> = [{ name: 'Dashboard', icon: 'fa fa-dashboard fa-2x', route: './Dashboard' }];
    //sideBarOpen: boolean = false;
    //@Output() sideBarPosition = new EventEmitter();
    
    constructor() {

    }

    ngOnChanges() {

    }

    ngOnInit() {
        console.log(this.sideBarOpen);
        //this.sideBarPosition.emit(false);
    }


    //toggleSideBar(toggle) {
    //    //this.sideBarOpen = toggle;
    //    //this.sideBarPosition.emit(this.sideBarOpen);
    //}
}
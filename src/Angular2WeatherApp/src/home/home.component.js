"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('../index');
var HomeComponent = (function () {
    function HomeComponent() {
        this.menu = [{
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
        this.defaultContent = true;
        this.sideBarPosition = false;
        this.defaultContent = false;
    }
    HomeComponent.prototype.onSideBarAction = function (event) {
        this.sideBarPosition = event;
        this.defaultContent = event;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'safety-home',
            templateUrl: index_1.Constants.TEMPLATE_PATH + 'home/home.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, index_1.NavComponent, index_1.SidebarComponent],
            providers: [index_1.ApiService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: index_1.DashboardComponent, useAsDefault: true },
        ]), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
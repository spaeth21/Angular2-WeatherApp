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
var index_1 = require('../index');
var NavComponent = (function () {
    //menu: Array<Object> = [{ name: 'Dashboard', icon: 'fa fa-dashboard fa-2x', route: './Dashboard' }];
    //sideBarOpen: boolean = false;
    //@Output() sideBarPosition = new EventEmitter();
    function NavComponent() {
    }
    NavComponent.prototype.ngOnChanges = function () {
    };
    NavComponent.prototype.ngOnInit = function () {
        console.log(this.sideBarOpen);
        //this.sideBarPosition.emit(false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavComponent.prototype, "sideBarOpen", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'weather-navbar',
            templateUrl: index_1.Constants.TEMPLATE_SHARED + 'navbar/navContent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=navContent.js.map
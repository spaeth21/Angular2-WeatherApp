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
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.sideBarOpen = false;
        this.toggleValue = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.ngOnChanges = function () {
    };
    SidebarComponent.prototype.onToggleSideBar = function (toggle) {
        this.sideBarOpen = toggle;
        this.toggleValue.emit(this.sideBarOpen);
    };
    SidebarComponent.prototype.checkActive = function (links) {
        for (var i = 0; i < links.length; i++) {
            if (this.router.isRouteActive(this.router.generate([links[i].link])))
                return true;
        }
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SidebarComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "toggleValue", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'weather-sidebar',
            templateUrl: index_1.Constants.TEMPLATE_SHARED + 'sidebar/sidebar.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: [index_1.Constants.TEMPLATE_SHARED + 'sidebar/sidebar.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
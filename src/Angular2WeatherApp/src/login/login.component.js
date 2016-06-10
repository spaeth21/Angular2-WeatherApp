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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var index_1 = require('../shared/index');
var LoginComponent = (function () {
    function LoginComponent(api, fb, router) {
        this.api = api;
        this.router = router;
        this.loginForm = fb.group({
            userName: [null, common_1.Validators.compose([common_1.Validators.required])],
            password: [null, common_1.Validators.compose([common_1.Validators.required])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var data = {
            username: this.loginForm.controls['userName'].value, password: this.loginForm.controls['password'].value
        };
        if (data.username === 'guest' && data.password === 'password') {
            setTimeout(function () {
                _this.router.navigate(['Home']);
            }, 10);
        }
        else {
            this.errorMessage = "Login is not correct, sample login is username: guest, and password: password";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'safety-login',
            templateUrl: index_1.Constants.TEMPLATE_PATH + 'login/login.component.html',
            providers: [http_1.HTTP_PROVIDERS, index_1.ApiService]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService, common_1.FormBuilder, router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
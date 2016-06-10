
import {Component, OnInit} from '@angular/core';
import { Http, HTTP_PROVIDERS} from '@angular/http';
import {Router} from '@angular/router-deprecated';
import {FormBuilder, Control, ControlGroup, Validators } from '@angular/common';

import {Constants, ApiService} from '../shared/index';



@Component({
    selector: 'safety-login',
    templateUrl: Constants.TEMPLATE_PATH + 'login/login.component.html',
    providers: [HTTP_PROVIDERS, ApiService]
})

export class LoginComponent implements OnInit {

    loginForm: ControlGroup;
    errorMessage: string;


    constructor(private api: ApiService, fb: FormBuilder, public router: Router){
        this.loginForm = fb.group({
            userName: [null, Validators.compose([Validators.required])],
            password: [null, Validators.compose([Validators.required])]
        });
    }


    ngOnInit() {

    }

    login() {
        let data = {
            username: this.loginForm.controls['userName'].value, password: this.loginForm.controls['password'].value
        }
        if (data.username === 'guest' && data.password === 'password') {
            setTimeout(() => {
                this.router.navigate(['Home']);
            }, 10);
        }
        else {
            this.errorMessage = "Login is not correct, sample login is username: guest, and password: password";
        }
    }
}
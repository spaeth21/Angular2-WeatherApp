
/// <reference path="../typings/main.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import {HashLocationStrategy, APP_BASE_HREF, LocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {bind, provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './shared/app.component';


import "rxjs/Rx";
//import {MATERIAL_PROVIDERS} from "ng2-material";

enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy), HTTP_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
/// <reference path="../typings/main.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./shared/app.component');
require("rxjs/Rx");
//import {MATERIAL_PROVIDERS} from "ng2-material";
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy), http_1.HTTP_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=main.js.map
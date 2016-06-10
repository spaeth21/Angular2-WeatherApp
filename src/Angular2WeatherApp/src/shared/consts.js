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
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "TEMPLATE_PATH", {
        get: function () { return 'app/templates/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "TEMPLATE_SHARED", {
        get: function () { return 'app/templates/shared/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "API_Path", {
        get: function () { return 'https://api.weathersource.com/v1/e92e51ac8ab0ae263855/history_by_postal_code.json?period=day&limit=21&postal_code_eq='; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "API_SELECTION", {
        get: function () {
            return '&country_eq=US&timestamp_between=2016-05-15T08:00+00:00,2016-06-05T08:00+00:00&fields=postal_code,country,timestamp,tempMax,tempAvg,tempMin,precip,windSpdMax,windSpdAvg,windSpdMin,relHumMax,relHumAvg,relHumMin,spcHumMax,spcHumAvg,spcHumMin';
        },
        enumerable: true,
        configurable: true
    });
    ;
    Constants = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Constants);
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=consts.js.map
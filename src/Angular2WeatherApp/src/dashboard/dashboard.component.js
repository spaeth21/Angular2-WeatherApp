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
var primeng_1 = require('primeng/primeng');
var index_1 = require('../shared/index');
require('rxjs/add/operator/map');
var DashboardComponent = (function () {
    function DashboardComponent(api) {
        this.api = api;
        this.chartDataHumid = null;
        this.chartDataTemp = null;
        this.chartDataWind = null;
        this.search = null;
        this.relHumMin = [];
        this.relHumAvg = [];
        this.relHumMax = [];
        this.spcHumMin = [];
        this.spcHumAvg = [];
        this.spcHumMax = [];
        this.tempMin = [];
        this.tempAvg = [];
        this.tempMax = [];
        this.windSpdMin = [];
        this.windSpdAvg = [];
        this.windSpdMax = [];
        this.precipData = [];
    }
    DashboardComponent.prototype.newUpObjects = function () {
        this.relHumMin.length = 0;
        this.relHumAvg.length = 0;
        this.relHumMax.length = 0;
        this.spcHumMin.length = 0;
        this.spcHumAvg.length = 0;
        this.spcHumMax.length = 0;
        this.tempMin.length = 0;
        this.tempAvg.length = 0;
        this.tempMax.length = 0;
        this.windSpdMin.length = 0;
        this.windSpdAvg.length = 0;
        this.windSpdMax.length = 0;
        this.precipData.length = 0;
    };
    DashboardComponent.prototype.executeSearch = function () {
        var _this = this;
        this.newUpObjects();
        this.api.get(this.search).map(function (weather) { return weather.json(); }).subscribe(function (weather) {
            _this.searchData = weather;
            _this.searchData.forEach(function (obj) {
                if (obj.hasOwnProperty('precip')) {
                    _this.precipData.push(obj.precip);
                }
                if (obj.hasOwnProperty('relHumMin')) {
                    _this.relHumMin.push(obj.relHumMin);
                }
                if (obj.hasOwnProperty('relHumAvg')) {
                    _this.relHumAvg.push(obj.relHumAvg);
                }
                if (obj.hasOwnProperty('relHumMax')) {
                    _this.relHumMax.push(obj.relHumMax);
                }
                if (obj.hasOwnProperty('spcHumMin')) {
                    _this.spcHumMin.push(obj.spcHumMin);
                }
                if (obj.hasOwnProperty('spcHumAvg')) {
                    _this.spcHumAvg.push(obj.spcHumAvg);
                }
                if (obj.hasOwnProperty('spcHumMax')) {
                    _this.spcHumMax.push(obj.spcHumMax);
                }
                if (obj.hasOwnProperty('tempMin')) {
                    _this.tempMin.push(obj.tempMin);
                }
                if (obj.hasOwnProperty('tempAvg')) {
                    _this.tempAvg.push(obj.tempAvg);
                }
                if (obj.hasOwnProperty('tempMax')) {
                    _this.tempMax.push(obj.tempMax);
                }
                if (obj.hasOwnProperty('windSpdMin')) {
                    _this.windSpdMin.push(obj.windSpdMin);
                }
                if (obj.hasOwnProperty('windSpdAvg')) {
                    _this.windSpdAvg.push(obj.windSpdAvg);
                }
                if (obj.hasOwnProperty('windSpdMax')) {
                    _this.windSpdMax.push(obj.windSpdMax);
                }
            });
            _this.chartDataHumid = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Real Humidity Minimum',
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: _this.relHumMin
                    },
                    {
                        label: 'Real Humidity Average',
                        backgroundColor: '#ff6633',
                        borderColor: '#c34920',
                        data: _this.relHumAvg
                    },
                    {
                        label: 'Real Humidity Max',
                        backgroundColor: '#bf3b0f',
                        borderColor: '#c34920',
                        data: _this.relHumMax
                    }
                ]
            };
            _this.chartDataTemp = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Tempature Minimum',
                        backgroundColor: '#FF6384',
                        borderColor: '#FF6384',
                        data: _this.tempMin
                    },
                    {
                        label: 'Tempature Average',
                        backgroundColor: '#4BC0C0',
                        borderColor: '#4BC0C0',
                        data: _this.tempAvg
                    },
                    {
                        label: 'Tempature Max',
                        backgroundColor: '#FFCE56',
                        borderColor: '#E7E9ED',
                        data: _this.tempMax
                    }
                ]
            };
            _this.chartDataWind = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Wind Speed Minimum',
                        backgroundColor: '#79b6ee',
                        borderColor: '#4583bd',
                        data: _this.windSpdMin
                    },
                    {
                        label: 'Wind Speed Average',
                        backgroundColor: '#095da9',
                        borderColor: '#4583bd',
                        data: _this.windSpdAvg
                    },
                    {
                        label: 'Wind Speed Max',
                        backgroundColor: '#0586fd',
                        borderColor: '#4583bd',
                        data: _this.windSpdMax
                    }
                ]
            };
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'safety-dashboard',
            templateUrl: index_1.Constants.TEMPLATE_PATH + 'dashboard/dashboard.component.html',
            directives: [index_1.TemplateHeaderComponent, primeng_1.UIChart]
        }), 
        __metadata('design:paramtypes', [index_1.ApiService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
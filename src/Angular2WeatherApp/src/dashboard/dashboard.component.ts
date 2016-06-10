import {Component, OnInit} from '@angular/core';

import {UIChart} from 'primeng/primeng';

import {Constants, TemplateHeaderComponent, ApiService} from '../shared/index';

import 'rxjs/add/operator/map';

@Component({
    selector: 'safety-dashboard',
    templateUrl: Constants.TEMPLATE_PATH + 'dashboard/dashboard.component.html',
    directives: [TemplateHeaderComponent, UIChart]

})

export class DashboardComponent implements OnInit {

    chartDataHumid: any = null;
    chartDataTemp: any = null;
    chartDataWind: any = null;
    search: string = null;
    searchData: any[];
    relHumMin: Array<number> = [];
    relHumAvg: Array<number> = [];
    relHumMax: Array<number> = [];
    spcHumMin: Array<number> = [];
    spcHumAvg: Array<number> = [];
    spcHumMax: Array<number> = [];
    tempMin: Array<number> = [];
    tempAvg: Array<number> = [];
    tempMax: Array<number> = [];
    windSpdMin: Array<number> = [];
    windSpdAvg: Array<number> = [];
    windSpdMax: Array<number> = [];
    precipData: Array<number> = [];

    constructor(private api: ApiService) {

    }

    newUpObjects() {
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
    }

    executeSearch() {
        this.newUpObjects();
        this.api.get(this.search).map(weather => weather.json()).subscribe(weather => {
            this.searchData = weather;
            this.searchData.forEach(obj => {
                if (obj.hasOwnProperty('precip')) {
                    this.precipData.push(obj.precip);
                }
                if (obj.hasOwnProperty('relHumMin')) {
                    this.relHumMin.push(obj.relHumMin);
                }
                if (obj.hasOwnProperty('relHumAvg')) {
                    this.relHumAvg.push(obj.relHumAvg);
                }
                if (obj.hasOwnProperty('relHumMax')) {
                    this.relHumMax.push(obj.relHumMax);
                }
                if (obj.hasOwnProperty('spcHumMin')) {
                    this.spcHumMin.push(obj.spcHumMin);
                }
                if (obj.hasOwnProperty('spcHumAvg')) {
                    this.spcHumAvg.push(obj.spcHumAvg);
                }
                if (obj.hasOwnProperty('spcHumMax')) {
                    this.spcHumMax.push(obj.spcHumMax);
                }
                if (obj.hasOwnProperty('tempMin')) {
                    this.tempMin.push(obj.tempMin);
                }
                if (obj.hasOwnProperty('tempAvg')) {
                    this.tempAvg.push(obj.tempAvg);
                }
                if (obj.hasOwnProperty('tempMax')) {
                    this.tempMax.push(obj.tempMax);
                }
                if (obj.hasOwnProperty('windSpdMin')) {
                    this.windSpdMin.push(obj.windSpdMin);
                }
                if (obj.hasOwnProperty('windSpdAvg')) {
                    this.windSpdAvg.push(obj.windSpdAvg);
                }
                if (obj.hasOwnProperty('windSpdMax')) {
                    this.windSpdMax.push(obj.windSpdMax);
                }
            });
            this.chartDataHumid = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Real Humidity Minimum',
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: this.relHumMin
                    },
                    {
                        label: 'Real Humidity Average',
                        backgroundColor: '#ff6633',
                        borderColor: '#c34920',
                        data: this.relHumAvg
                    },
                    {
                        label: 'Real Humidity Max',
                        backgroundColor: '#bf3b0f',
                        borderColor: '#c34920',
                        data: this.relHumMax
                    }
                ]
            }
            this.chartDataTemp = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Tempature Minimum',
                        backgroundColor: '#FF6384',
                        borderColor: '#FF6384',
                        data: this.tempMin
                    },
                    {
                        label: 'Tempature Average',
                        backgroundColor: '#4BC0C0',
                        borderColor: '#4BC0C0',
                        data: this.tempAvg
                    },
                    {
                        label: 'Tempature Max', 
                        backgroundColor: '#FFCE56',
                        borderColor: '#E7E9ED',
                        data: this.tempMax
                    }
                ]
            }
            this.chartDataWind = {
                labels: ['May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'June 01', 'June 02', 'June 03', 'June 04'],
                datasets: [
                    {
                        label: 'Wind Speed Minimum',
                        backgroundColor: '#79b6ee',
                        borderColor: '#4583bd',
                        data: this.windSpdMin
                    },
                    {
                        label: 'Wind Speed Average',
                        backgroundColor: '#095da9',
                        borderColor: '#4583bd',
                        data: this.windSpdAvg
                    },
                    {
                        label: 'Wind Speed Max',
                        backgroundColor: '#0586fd',
                        borderColor: '#4583bd',
                        data: this.windSpdMax
                    }
                ]
            }
        });
    }

    ngOnInit() {
    }
    
}
import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
    public static get TEMPLATE_PATH() { return 'app/templates/' };
    public static get TEMPLATE_SHARED() { return 'app/templates/shared/' };
    public static get API_Path() { return 'https://api.weathersource.com/v1/e92e51ac8ab0ae263855/history_by_postal_code.json?period=day&limit=21&postal_code_eq=' };
    public static get API_SELECTION() {
        return '&country_eq=US&timestamp_between=2016-05-15T08:00+00:00,2016-06-05T08:00+00:00&fields=postal_code,country,timestamp,tempMax,tempAvg,tempMin,precip,windSpdMax,windSpdAvg,windSpdMin,relHumMax,relHumAvg,relHumMin,spcHumMax,spcHumAvg,spcHumMin'
    };

}
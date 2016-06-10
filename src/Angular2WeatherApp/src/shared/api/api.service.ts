import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Constants} from '../index';
@Injectable()
export class ApiService {
    api: string = Constants.API_Path;
    crossOrigin: Headers = new Headers({
        "Access-Control-Allow-Origin": "https://developer.weathersource.com"
    });
    crossOriginOptions: RequestOptions = new RequestOptions({ headers: this.crossOrigin });

    constructor(private http: Http) { }
    
    get(zip: string)
    {
        return this.http.get(Constants.API_Path + zip + Constants.API_SELECTION);
           
    }
    
}
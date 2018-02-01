
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';
import {WeatherForecast} from "./index";

let apiUrl = 'http://localhost:7838/api/';

@Injectable()
export class WeatherService {

    headers: Headers;

    constructor(public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getForecast(): Observable<WeatherForecast[]> {
        return this.http
            .get(apiUrl + 'sampledata/weatherforecasts', new RequestOptions({ headers: this.headers }))
            .map((respose: Response) => this.extractData<WeatherForecast[]>(respose))
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error);
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error("Bad response status:" + res.status);
        }

        let body = res.json ? res.json() : null;

        return <T>(body || {});
    }

}

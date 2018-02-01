import { Component, OnInit } from '@angular/core';
import {WeatherForecast, WeatherService} from '../models/index';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})



export class HomeComponent implements OnInit {
    forecast: WeatherForecast[];
    public closable: boolean = false;


    constructor(private weatherService : WeatherService) { }

    ngOnInit(): void {
        this.forecast = [];

        this.weatherService.getForecast()
            .subscribe(forecast => {
                this.forecast = forecast;
                console.log(this.forecast);
            });
    }
    
}
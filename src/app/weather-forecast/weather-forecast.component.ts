import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() forecast:WeatherForecast; 
  constructor() {
    console.log("creating a forecast component");
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast';
import { HttpClient } from '@angular/common/http';
import { CityDetails } from '../models/city-details';


@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  cityDetails: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = new CityDetails("","","");
  }

  getWeather() {
    console.log("getting weather");
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    console.log(this.weatherBitUrl);
    this.http.get(this.weatherBitUrl)
    .subscribe( (results:any[]) => {
        console.log(results);
        this.cityDetails = new CityDetails(results['city_name'], results['state_code'], results['country_code']);
        //clear previous forecasts:
        this.weatherForecasts = [];
        for (var i = 0; i < results['data'].length; i++) {
            const forecast = results['data'][i];
            var day; 
            if (i==0) day = 'Today';
            else if (i==1) day = 'Tomorrow';
            else day = forecast['datetime'];
            var wf:WeatherForecast = new WeatherForecast( day, forecast['app_max_temp'], 
                forecast['app_min_temp'], forecast['precip']);
            this.weatherForecasts.push(wf);
        }
        console.log(this.weatherForecasts);
        console.log(this.cityDetails);
    });
    //subscribe to weatherbit forecast results here
  }

  ngOnInit() {
  }

}

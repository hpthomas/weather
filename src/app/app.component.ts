import { Component } from '@angular/core';
import { weatherBit } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* AppComponent does minimal work, only recording searchText to be passed to WeatherForecastList */
export class AppComponent {
  title = 'app';
  searchText: string;
  constructor() {
    console.log(weatherBit.apiKey);
  }
}

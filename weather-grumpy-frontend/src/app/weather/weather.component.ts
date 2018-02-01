import { Component, OnInit } from '@angular/core';

import { Weather } from '../weather';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  title = 'Grumpy Weather';
  weather: Weather;

  constructor(private weatherService: HeroService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather()
    .subscribe(weather => this.weather = weather);
  }

}

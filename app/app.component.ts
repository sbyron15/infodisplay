import { Component } from '@angular/core';
import { WeatherComponent } from './weather.component';

@Component({
  selector: 'my-app',
  template: '<weather></weather>',
  directives: [ WeatherComponent ]
})
export class AppComponent { }

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { DegreesPipe } from './degrees.pipe';

@Component({
  selector: 'weather',
  templateUrl: 'app/weather.html',
  pipes: [DegreesPipe]
})
export class WeatherComponent implements OnInit{

	forecast = undefined;

	constructor(private http: Http) {}

	ngOnInit() {
		this.http.get('http://localhost:4000/forecast')
			.toPromise()
			.then(response => this.forecast = response.json())
			.catch(this.handleError);
	}

	toDate(time : number) {
		return new Date(time*1000);
	}

	private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    // We'd also dig deeper into the error to get a better message
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RESTART';
  adding_trip = false;

  newTrip = {
  	title: ""
  }

  trips = [{
  	title: 'Trip to London'
  }, {
  	title: 'Trip to Australia'
  } ,{
  	title: 'Trip to Barcelona'
  }];


  addTrip() {
  	this.adding_trip = true;
  }

  cancelAddTrip() {
  	console.log("cancelAddTrip");
  	this.adding_trip = false;
  }

  doAddTrip() {
  	console.log("doAddTrip");
  	this.trips.push(this.newTrip);

  	this.newTrip = {title:""}

  	this.adding_trip = false;
  }
}

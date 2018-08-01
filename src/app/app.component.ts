import { Component, OnInit } from '@angular/core';
import {TripService, Trip } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private title = 'RESTART';


  private adding_trip : Boolean = false;

  private trips: Trip[] = [];

  private countries = ['Italy', 'France', 'US', 'Israel'];

  private currentTrip : Trip = new Trip({
  	title: ""
  })

  constructor(private tripService: TripService) {

  }

  reload() {
  	this.tripService.load().subscribe((result) => {
      console.log("Result", result);
      this.trips = result;
    });
  }

  ngOnInit() {
  	this.reload();
  }

  newTrip() {
  	this.currentTrip = new Trip();
  	this.adding_trip = true;
  }

  editTrip(trip) {
  	this.currentTrip = trip;
  	this.adding_trip = true;
  }

  onSubmit(trip) {
    this.saveTrip(trip);
  }

  saveTrip(trip) {
    console.log("saveTrip", trip);
    this.tripService.save(trip).subscribe(result => {
      this.reload();
      this.adding_trip = false;
    });
  }

  deleteTrip(trip) {
    console.log("deleteTrip", trip);
  	this.tripService.destroy(trip).subscribe(() => {
      this.reload();  
    });
  	
  }
}

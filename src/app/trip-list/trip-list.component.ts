import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  @Input() trips;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  deleteTrip(trip) {
  	this.onDelete.emit(trip);
  }

  editTrip(trip) {
  	this.onEdit.emit(trip);
  }

}

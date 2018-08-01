import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() header_title;
  @Output() addTrip = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newTrip() {
  	this.addTrip.emit();
  }

}

import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import { ApiService } from './api.service';
import { Trip } from '../models';

@Injectable()
export class TripService {
  private trips: Trip[] = [];
  constructor (
    private apiService: ApiService,
    
  ) {}

  load(): Observable<Trip[]> {
    return this.apiService.getAll().map(data => {
      return data['rows'].map(r => r.doc);
    });
  }

  get(id): Observable<Trip> {
    return this.apiService.get(id, {})
           .map(data => data.trip);
  }

  save(trip : Trip): Observable<Trip> {
    // If we're updating an existing trip
    
    if (trip._id) {
      console.log("update", trip);
      return this.apiService.put(trip._id, trip);

    // Otherwise, create a new trip
    } else {
      console.log("create", trip);
      return this.apiService.post(trip);
    }
  }

  destroy(trip) {
    console.log("Delete", trip._id);
    let path = trip._id + '?rev=' + trip._rev;
    return this.apiService.delete(path);
  }



}
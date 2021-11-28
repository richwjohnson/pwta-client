import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwtaStopsService {

  constructor(private http: HttpClient) { }

  getStops(routeId: string) {
    return this.http.get<any>(
      `https://api-v3.mbta.com/stops?filter[route]=${routeId}`);
  }

}

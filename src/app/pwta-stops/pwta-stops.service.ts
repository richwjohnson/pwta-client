import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IpwtaStopApiResponse } from "./interfaces/ipwta-stop-api-response";

@Injectable({
  providedIn: 'root'
})
export class PwtaStopsService {

  constructor(private http: HttpClient) { }

  getStops(routeId: string) {
    return this.http.get<IpwtaStopApiResponse>(
      `https://api-v3.mbta.com/stops?filter[route]=${routeId}`)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

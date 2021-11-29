import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { IpwtaRouteApiResponse } from "./interfaces/ipwta-route-api-response";

@Injectable({
  providedIn: 'root'
})
export class PwtaRoutesService {

  constructor(private http: HttpClient) {}

  getRoutes() {
    return this.http.get<IpwtaRouteApiResponse>(
      `https://api-v3.mbta.com/routes?filter[type]=0,1`)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    )
    ;
  }

}

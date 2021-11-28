import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PwtaRoutesService {

  constructor(private http: HttpClient) {}

  getRoutes() {
    return this.http.get<any>(
      `https://api-v3.mbta.com/routes?filter[type]=0,1`)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    )
    ;
  }

}

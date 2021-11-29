import { Component, OnInit } from '@angular/core';
import { IpwtaStop } from "../pwta-stops/interfaces/ipwta-stop";
import { IpwtaRoute } from "./interfaces/ipwta-route";
import { PwtaRoutesService } from "./pwta-routes.service";


@Component({
  selector: 'app-pwta-routes',
  templateUrl: './pwta-routes.component.html',
  styleUrls: ['./pwta-routes.component.css']
})
export class PwtaRoutesComponent implements OnInit {

  // pwtaRoutes is an array that will store a list of pwtaRoute objects.
  public pwtaRoutes: Array<IpwtaRoute>;
  // errorMessage will store an error message, if one is received from the API call
  public errorMessage: string;
  // selectedRoute is used to store the currently selected route
  public selectedRoute: IpwtaRoute;

  constructor(private pwtaRoutesService: PwtaRoutesService) {
    this.pwtaRoutes = [];
    this.errorMessage = "";
    this.selectedRoute = {id: '', attributes: {color: '', long_name: ''}};
  }

  ngOnInit(): void {
    this.getTaRoutes();
  }

  // Use the Routes service to make an asynchronous call to fetch a list of routes
  getTaRoutes(): void {
    this.pwtaRoutesService.getRoutes().subscribe(results => {
      if(results.data) {
        this.pwtaRoutes = results.data;
      }
    }, error => {
      // If we catch an error, set the errorMessage so we can display it to the user.
      this.errorMessage = error.message;
    });
  }

  // If a user clicks on a route, let's keep track of it.
  setSelectedRoute(route: IpwtaRoute) {
    this.selectedRoute = route;
  }

}

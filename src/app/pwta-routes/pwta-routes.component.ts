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
  public errorMessage: string;
  public route: IpwtaRoute;

  constructor(private pwtaRoutesService: PwtaRoutesService) {
    this.pwtaRoutes = [];
    this.errorMessage = "";
    this.route = {id: '', attributes: {color: '', long_name: ''}};
  }

  ngOnInit(): void {
    this.getTaRoutes();
  }

  getTaRoutes(): void {
    this.pwtaRoutesService.getRoutes().subscribe(results => {
      if(results.data) {
        this.pwtaRoutes = results.data;
      }
    }, error => {
      this.errorMessage = error.message;
    });
  }

  setSelectedRoute(route: IpwtaRoute) {
    console.log(route);
    this.route = route;
  }

}

import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IpwtaRoute } from "../pwta-routes/interfaces/ipwta-route";
import { IpwtaStop } from "./interfaces/ipwta-stop";
import { PwtaStopsService } from "./pwta-stops.service";

@Component({
  selector: 'app-pwta-stops',
  templateUrl: './pwta-stops.component.html',
  styleUrls: ['./pwta-stops.component.css']
})
export class PwtaStopsComponent implements OnInit {
  // pwtaStops is an array that will store a list of pwtaStop objects.
  public pwtaStops: Array<IpwtaStop>;
  // route is an input parameter that's received from the calling component (pwta-routes.component.html)
  // it contains the selected route object
  @Input('route') route: IpwtaRoute;

  constructor(private pwtaStopsService: PwtaStopsService) {
    this.pwtaStops = [];
    this.route = {id: '', attributes: {color: '', long_name: ''}};
  }

  ngOnInit(): void { }

  // If a change is detected on the route parameter, update our component and fetch the appropriate route information
  ngOnChanges(changes: SimpleChanges) {
    this.route = changes.route.currentValue;
    this.getPwtaStops(this.route.id);
  }

  // Use the Stops service to make an asynchronous call to fetch a list of stops for a given route
  getPwtaStops(routeId: string): void {
    if (this.route.id.length > 0) {
      this.pwtaStopsService.getStops(routeId).subscribe(results => {
        this.pwtaStops = results.data;
      });
    }
  }



}

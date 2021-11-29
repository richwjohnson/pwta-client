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
  public pwtaStops: Array<IpwtaStop>;
  public routename = '';
  @Input('route') route: IpwtaRoute;

  constructor(private pwtaStopsService: PwtaStopsService) {
    this.pwtaStops = [];
    this.route = {id: '', attributes: {color: '', long_name: ''}};
  }

  ngOnInit(): void {
    // console.log("selected route", this.selectedRoute);
    // if (this.selectedRoute) {
    //   this.getPwtaStops(this.selectedRoute);
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.route = changes.route.currentValue;
    this.getPwtaStops(this.route.id);
  }

  getPwtaStops(routeId: string): void {
    if (this.route.id.length > 0) {
      this.pwtaStopsService.getStops(routeId).subscribe(results => {
        console.log(results.data);
        this.pwtaStops = results.data;
      });
    }
  }



}

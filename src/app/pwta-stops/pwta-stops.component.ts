import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IpwtaStop } from "./interfaces/ipwta-stop";
import { PwtaStopsService } from "./pwta-stops.service";

@Component({
  selector: 'app-pwta-stops',
  templateUrl: './pwta-stops.component.html',
  styleUrls: ['./pwta-stops.component.css']
})
export class PwtaStopsComponent implements OnInit {
  public pwtaStops: Array<IpwtaStop>;

  constructor(private pwtaStopsService: PwtaStopsService, private route: ActivatedRoute) {
    this.pwtaStops = [];
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.getPwtaStops(id);
    }
  }

  getPwtaStops(routeId: string): void {
    this.pwtaStopsService.getStops(routeId).subscribe(results => {
      this.pwtaStops = results.data;
    });
  }

}

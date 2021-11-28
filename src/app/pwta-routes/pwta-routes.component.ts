import { Component, OnInit } from '@angular/core';
import { IpwtaRoute } from "./interfaces/ipwta-route";
import { PwtaRoutesService } from "./pwta-routes.service";


@Component({
  selector: 'app-pwta-routes',
  templateUrl: './pwta-routes.component.html',
  styleUrls: ['./pwta-routes.component.css']
})
export class PwtaRoutesComponent implements OnInit {

  // taRoutes is an array that will store a list of taRoute objects.
  public pwtaRoutes: Array<IpwtaRoute>;
  public errorMessage: string;

  constructor(private pwtaRoutesService: PwtaRoutesService) {
    this.pwtaRoutes = [];
    this.errorMessage = "";
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

}

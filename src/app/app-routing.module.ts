import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwtaRoutesComponent } from "./pwta-routes/pwta-routes.component";
import { PwtaStopsComponent } from "./pwta-stops/pwta-stops.component";

const routes: Routes = [
  { path: 'routes', component: PwtaRoutesComponent },
  { path: 'stops/:id', component: PwtaStopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingviewComponent } from './parkingview/parkingview.component';


const routes: Routes = [{path: 'parking.view', component: ParkingviewComponent},
{path: 'parking-view', component: ParkingviewComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

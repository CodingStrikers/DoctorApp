import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ProfileComponent } from './profile/profile.component';
import { AppointComponent } from './appoint/appoint.component';

const routes: Routes = [{
  path:"booking/:specia/:locat",
  component:BookingComponent
},
{
path:"profile/:id/:spec",
component:ProfileComponent
},
{
  path:"appointment/:id",
  component:AppointComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }

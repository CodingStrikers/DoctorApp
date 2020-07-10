import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionComponent } from './vision/vision.component';
import { combineLatest } from 'rxjs';
import { AppComponent } from './app.component';
import { DocloginComponent } from './doclogin/doclogin.component';


const routes: Routes = [
  {
    path:'vision',
    component:VisionComponent
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path:"doctorlogin/:id",
    component:DocloginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

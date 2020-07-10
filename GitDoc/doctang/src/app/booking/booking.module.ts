import { NgModule , NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ProfileComponent } from './profile/profile.component';
import { AppointComponent } from './appoint/appoint.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [BookingComponent, ProfileComponent, AppointComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatCardModule,
    ScrollingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,

    

  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]

})
export class BookingModule { }

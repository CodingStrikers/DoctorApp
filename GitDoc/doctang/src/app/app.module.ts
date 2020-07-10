import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisionComponent } from './vision/vision.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
import { BookingModule } from './booking/booking.module';
import {MatRadioModule} from '@angular/material/radio';
import { DocloginComponent } from './doclogin/doclogin.component';
import {MatIconModule} from '@angular/material/icon';

 

@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    DocloginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    HttpClientModule,
    MatAutocompleteModule,
    BookingModule,
    HttpClientModule,
    MatRadioModule

  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }

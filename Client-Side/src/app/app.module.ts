import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { ClientProfilComponent } from './components/client-profil/client-profil.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    ClientProfilComponent,
    routingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatSliderModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

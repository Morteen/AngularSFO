import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SjekkInnComponent } from './sjekk-inn/sjekk-inn.component';
import { VisAlleEleverComponent } from './vis-alle-elever/vis-alle-elever.component';
import { RegElevComponent } from './reg-elev/reg-elev.component';
import {RouterModule,Routes} from '@angular/router';
import { VelkommenComponent } from './velkommen/velkommen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegElevComponent,
    SjekkInnComponent,
    VisAlleEleverComponent,
    VelkommenComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MaterialModule,
    RouterModule.forRoot([
      {path:'start', component:VelkommenComponent},
      {path:'visAlle', component:VisAlleEleverComponent},
      {path:'sjekkInn', component:SjekkInnComponent},
      {path:'regNy', component:RegElevComponent},
     
      { path: '',   redirectTo: '/start', pathMatch: 'full' }
      
    ]),
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//ng generate component regElev --module=app.module

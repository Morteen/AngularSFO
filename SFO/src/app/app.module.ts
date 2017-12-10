import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SjekkInnComponent } from './sjekk-inn/sjekk-inn.component';
import { VisAlleEleverComponent } from './vis-alle-elever/vis-alle-elever.component';
import { RegElevComponent } from './reg-elev/reg-elev.component';
import {RouterModule,Routes} from '@angular/router';
import { VelkommenComponent } from './velkommen/velkommen.component';
import { FooterComponent } from './footer.component/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EleverService } from './elever.service';
import { OppmoteComponent } from './oppmote/oppmote.component';
import { ChangeDetectorRef } from '@angular/core';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { InfoDialogComponent } from './Modaler/Info-dialog/Info-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegElevComponent,
    SjekkInnComponent,
    VisAlleEleverComponent,
    VelkommenComponent,
    FooterComponent,
    OppmoteComponent,
    MyDialogComponent,
    InfoDialogComponent
  
   
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule ,
    BrowserAnimationsModule,
    
   
   
   
    RouterModule.forRoot([
      {path:'start',component:VelkommenComponent},
      {path:'visAlle', component:VisAlleEleverComponent},
      {path:'sjekkInn', component:SjekkInnComponent},
      {path:'regNy', component:RegElevComponent},
      {path:'oppmote/:id', component: OppmoteComponent},
     
      { path: '',   redirectTo: '/start', pathMatch: 'full' }
      
    ]),
    
    
   
  ],
  entryComponents:[MyDialogComponent,InfoDialogComponent],
  
  providers: [EleverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//ng generate component regElev --module=app.module

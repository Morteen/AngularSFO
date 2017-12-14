import { Component, OnInit } from '@angular/core';
import { EleverService } from './elever.service';
import { HttpClient } from '@angular/common/http';
import { elev } from './MyClasses/elev';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private Http : HttpClient) {
    
    
        this.URL ="http://localhost:3000/Elever";
    }
    elev : elev[]=[];
    URL : string;
    tall:number
    
    
    ngOnInit() {
    
    
        this.Http.get(this.URL)
            .map((response : Response) => response.json())
            .subscribe((result:any) => {
                this.elev = result;
               
            });
    }
skaffListe(){
  return this.elev;
}



 /* elever:Elev;
  test:any[];
  constructor(private elevService:EleverService){}
  ngOnInit(){
    
   
   
   
  }
  skaffElevliste(liste:Elev){
    
   
  }*/
}


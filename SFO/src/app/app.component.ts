import { Component, OnInit } from '@angular/core';
import { EleverService } from './elever.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elever:Elev;
  test:any[];
  constructor(private elevService:EleverService){}
  ngOnInit(){
    
   
   
   
  }
  skaffElevliste(liste:Elev){
    
   
  }
}
interface Elev{
  fname:string,
  ename:string,
  tlf:string,
  info:string,
  trinn:number,
  klasse:string,
  attendens:[{
    dato:Date,
    sjekkinn:DateTimeFormat,
    sjekkUt:DateTimeFormat

  }

  ]
}

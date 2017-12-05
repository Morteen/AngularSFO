import { Component, OnInit } from '@angular/core';
import { VisAlleEleverComponent } from '../vis-alle-elever/vis-alle-elever.component';
import { EleverService } from '../elever.service';
import { getLocaleDateTimeFormat } from '@angular/common';



@Component({
  selector: 'app-sjekk-inn',
  templateUrl: './sjekk-inn.component.html',
  styleUrls: ['./sjekk-inn.component.css']
})
export class SjekkInnComponent implements OnInit {
 liste:Elev;
 Oppmote:Att;
 regKnptekst="Sjekk inn"
time:any;
dato:any;
  constructor(private elevService:EleverService) { }

  ngOnInit() {
this.liste=this.elevService.visAlleElever();
console.log("Dette er loggen fra sjekk-inn comp:"+this.liste);

  }

reg(id:number){
 
  this.dato=new Date().toLocaleString('en-NO');
  this.time= this.dato;
  console.log("Dette er reg knappen i sjekk-inn comp "+ id+" Dato:"+this.dato)
  
}
  inn(id:number,dato:Date,sjekkIn:DateTimeFormat){
    this.Oppmote.dato=dato;
    this.Oppmote.sjekkinn=sjekkIn;
   
    this.liste[id].attendens.push(this.Oppmote);

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
interface Att{
 
    dato:Date;
    sjekkinn:DateTimeFormat,
    sjekkUt:DateTimeFormat

  
}

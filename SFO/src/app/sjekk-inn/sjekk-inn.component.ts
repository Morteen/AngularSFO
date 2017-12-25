import { Component, OnInit } from '@angular/core';
import { VisAlleEleverComponent } from '../vis-alle-elever/vis-alle-elever.component';
import { EleverService } from '../elever.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Elev } from '../MyInterface/Elev';
import { Attendens } from '../MyClasses/attendens';
import { IAttendens } from '../MyInterface/IAttendens';



@Component({
  selector: 'app-sjekk-inn',
  templateUrl: './sjekk-inn.component.html',
  styleUrls: ['./sjekk-inn.component.css']
})
export class SjekkInnComponent implements OnInit {

  elever$: Observable<Elev[]>;
  totantall: number
  antSjekketInn: number = 0;
  antSjekketUt: number = 0;
  elev: Elev;
  OppmoteArray: Attendens[] = [];
  antTrinn:number[]=[1,2,3,4]
  trinn:number=0;

  _eoppmote: Attendens;
  OppM: IAttendens;
  private tidsPunktInn: string;
  private tidspunktUt: string
  private dato: string;
  regKnptekst = "Sjekk inn"

  elever: Elev[];

  constructor(private elevService: EleverService) { }
  

  
  getTrinn(innTrinn:number,event:any){
    event.preventDefault();
    this.trinn=innTrinn
    console.log("Dette er det valgte trinnet:"+this.trinn)
  }
  setTrinn(elev:Elev){
    var sjekk =false;
    if(this.trinn==elev.trinn){
     sjekk=true;
    }
    console.log("Trinn:"+this.trinn+"Elev trinn:"+elev.trinn+"Sjekk:"+sjekk);
       return sjekk;
     

  }

  ngOnInit() {
   

    this.elever$ = this.elevService.getAllElever();
    if (this.elever$ != null) {

      this.elever$.subscribe(
        resultArray => this.elever =resultArray.sort((a, b) => {
          if(a.trinn==b.trinn){
            let comparison = 0;
            if (a.klasse > b.klasse) {
              comparison = 1;
            } else if (a.klasse < b.klasse) {
              comparison = -1;
            }
            return comparison
          }else{
          return a.trinn - b.trinn
          } 
        }
      ),

        error => console.log("Error :: " + error)


      );
      this.elever$.subscribe(
        ant => this.totantall = ant.length,
      );

    }



  }

  reg(id: number) {


  }
  tid(id: number) {
    this.OppM = this.OppmoteArray.find(opp => opp.elevId == id)
    console.log("Dette er loggen av tid:" + this.OppM.elevId)
    return this.OppM.SjekkInn;

  }
  utTid(id: number) {
    this.OppM = this.OppmoteArray.find(opp => opp.elevId == id)
    console.log("Dette er loggen av tid:" + this.OppM.elevId)
    return this.OppM.SjekkUt;

  }

  inn(id: number) {
    this.elev = this.elever.find(elev => elev.id == id);
    this.elev.SjekkInn = true;
    this.antSjekketInn++;
    console.log("Virker" + id + " " + this.elev.fname + " " + this.elev.SjekkInn);

    var tid = new Date().getHours().toLocaleString('en-NO') + ":" + new Date().getMinutes().toLocaleString('en-NO') + ":" + new Date().getSeconds().toLocaleString('en-NO');
    this._eoppmote = new Attendens(id, tid);
    console.log("Oppmøte:" + this._eoppmote.elevId + " Sjekk inn tid:" + this._eoppmote.SjekkInn);
    this._eoppmote.Dato = new Date().getDay().toLocaleString('en-NO');
    this.OppmoteArray.push(this._eoppmote);




  }
  ut(id: number) {
    this.elev = this.elever.find(elev => elev.id == id);
    //this.elev.SjekkInn = false;
    this.elev.SjekkUt=true;
    this.OppmoteArray.find(opp => opp.elevId == id).SjekkUt = this.setTid();

    console.log("Virker" + id + " " + this.elev.fname + " " + this.elev.SjekkInn)
    this.antSjekketUt++;

  }



  cssVelger(test: boolean) {
    if (test) {
      return 'btn btn-primary'
    } else {
      return 'btn btn-danger'
    }



  }

  setTid() {
    return new Date().getHours().toLocaleString('en-NO') + ":" + new Date().getMinutes().toLocaleString('en-NO') + ":" + new Date().getSeconds().toLocaleString('en-NO');
  }


}


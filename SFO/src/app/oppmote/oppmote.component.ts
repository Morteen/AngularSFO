import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EleverService } from '../elever.service';

@Component({
  selector: 'app-oppmote',
  templateUrl: './oppmote.component.html',
  styleUrls: ['./oppmote.component.css']
})
export class OppmoteComponent implements OnInit, OnDestroy {

  elever: Elev;
  elev: Elev;
  //att: Attendens;
  navn: string;
  id: number;
  private sub: any;
  attendens:Attendens ;
  test:string;
tabell:any[];
  constructor(private route: ActivatedRoute, private eleverService: EleverService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    console.log("Dette er loggen for Id oppmøte"+ this.id);//virker
/*
    //this.elever= this.eleverService.visAlleElever();//virker
    this.attendens = this.eleverService.visAttendens(this.id);
    //this.tabell=[this.attendens];
    //this.test=""+this.attendens[0].dato+" Lengde:"+this.tabell.length
    console.log("Dette er loggen for ATT oppmøte"+ this.attendens);
    this.elev=this.eleverService.visEn(this.id);
    this.navn = this.elev.fname + " " + this.elev.ename;
    console.log("Dette er loggen for navn i oppmøte"+ this.navn+" Dette er lengden på tabellen "+this.tabell.length);


  }*/
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
interface Elev {
  fname: string,
  ename: string,
  tlf: string,
  info: string,
  trinn: number,
  klasse: string,

}
interface Attendens {

  dato: Date;
  sjekkInn: Date,
  sjekkUt: Date


}



import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EleverService } from '../elever.service';
import { AttendensService } from '../MyServices/attendens.service';

import { Elev } from '../MyInterface/Elev';
import { Observable } from "rxjs/Observable";
import { Attendens } from '../MyClasses/attendens';
import { IAttendens } from '../MyInterface/IAttendens';

@Component({
  selector: 'app-oppmote',
  templateUrl: './oppmote.component.html',
  styleUrls: ['./oppmote.component.css']
})
export class OppmoteComponent implements OnInit, OnDestroy {


  navn: string;
  id: number;
  private sub: any;
  attendens$: Observable<IAttendens[]>;


  URL: string;
  constructor(private route: ActivatedRoute, private attServ: AttendensService, private elevServ: EleverService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

this.attendens$=this.attServ.getAllAt(this.id);
    });



    //this.navn = this.elevServ.visEn(this.id);
    this.elevServ.cast.subscribe(navn=>this.navn=navn);
    console.log(this.id);



  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}




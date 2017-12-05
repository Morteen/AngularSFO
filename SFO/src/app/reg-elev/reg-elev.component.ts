import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-reg-elev',
  templateUrl: './reg-elev.component.html',
  styleUrls: ['./reg-elev.component.css']
})
export class RegElevComponent implements OnInit {

  elev:Elev;
  elever:Elev[];
    constructor() { }
  
    ngOnInit() {
      this.elev={
      fname:'Morten',
      ename:'Olsen',
      trinn:4,
      klasse:'B',
      kontaktTlf:40042106,
      info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    
    }
    this.elever=[this.elev];
    }
  addElev(fname,ename,trinn,klasse,konTlf,info){
    console.log(fname+""+ename+""+trinn+""+klasse+""+konTlf+""+info);
    this.elev={fname:fname,
    ename:ename,
  trinn:trinn,
  klasse:klasse,
  kontaktTlf:konTlf,
  info:info
  }
  this.elever.push(this.elev);
  console.log(this.elever.length);
  alert(this.elev.fname);
    return false;
  }
  
  }
  
  
  interface Elev{
    fname:string,
    ename:string;
    trinn:number,
    klasse:string,
    kontaktTlf:number,
    info:string
  }

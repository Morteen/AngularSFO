import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EleverService } from '../elever.service';

@Component({
  selector: 'app-reg-elev',
  templateUrl: './reg-elev.component.html',
  styleUrls: ['./reg-elev.component.css']
})
export class RegElevComponent implements OnInit {

  elev:Elev;
  elever:Elev[];
    constructor(private elevService:EleverService) { }
  
    ngOnInit() {
      
    
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

test(fname: string, ename: string, tlf: string, info: string, trinn: number, klasse: string){
  this.elevService.postEnElev(fname,ename, tlf, info, trinn, klasse);
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

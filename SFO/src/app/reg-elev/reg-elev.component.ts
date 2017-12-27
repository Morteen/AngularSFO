import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EleverService } from '../elever.service';
import { Elev } from '../MyInterface/Elev';

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
 

  addElev(fname: string, ename: string, tlf: string, info: string, trinn: number, klasse: string){
  this.elevService.postEnElev(fname,ename, tlf, info, trinn, klasse);
}



  
  }
  

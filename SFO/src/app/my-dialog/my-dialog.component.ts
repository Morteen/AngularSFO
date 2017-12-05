import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { inject } from '@angular/core/testing';
import { EleverService } from '../elever.service';
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
elev:Elev;
  constructor(private elevService:EleverService, public dialogRef:MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


  onCloseConfirm(id:number,fname:string,ename:string,trinn:number,klasse:string,tlf:string,info:string){
    this.elevService.oppdater(id,fname,ename,trinn,klasse,tlf,info);
this.dialogRef.close('Confirm');
  }
  onCloseCancle(){
    this.dialogRef.close('Confirm');
  }

  ngOnInit() {
    this.elev=this.elevService.visAlleElever();
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

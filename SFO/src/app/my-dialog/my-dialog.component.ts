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
test:Elev;
  constructor(private elevService:EleverService, public dialogRef:MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


  onCloseConfirm(id:number,fname:string,ename:string,trinn:number=0,klasse:string,tlf:string,info:string){
    if(fname==null||fname==""){
      fname=this.elev[id].fname;
    }
    if(ename==null||ename==""){
      ename=this.elev[id].ename;
    }
    if(trinn==null||trinn==0){
      trinn=this.elev[id].trinn;
    }
    if(klasse==null||klasse==""){
      klasse=this.elev[id].klasse;
    }
    if(info==null||info==""){
      info=this.elev[id].info;
    }
    if(tlf==null||tlf==""){
      tlf=this.elev[id].tlf;
    }
    this.elevService.oppdater(id,fname,ename,trinn,klasse,tlf,info);
    
    var res={
      id:id,
      fname:fname,
      ename:ename,
      trinn:trinn,
      klasse:klasse,
      tlf:tlf,
      info:info
    }
this.dialogRef.close(res);
  }
  onCloseCancle(){
    this.dialogRef.close('Cancle');
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

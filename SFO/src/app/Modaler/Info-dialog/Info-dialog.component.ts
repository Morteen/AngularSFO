import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { inject } from '@angular/core/testing';
import { EleverService } from '../../elever.service';
@Component({
  selector: 'app-Info-dialog',
  templateUrl: './Info-dialog.component.html',
  styleUrls: ['./Info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
elev:Elev;
test:Elev;
  constructor(private elevService:EleverService, public dialogRef:MatDialogRef<InfoDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


  onCloseConfirm(){
    
    
    
    
this.dialogRef.close("Bekreft");
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

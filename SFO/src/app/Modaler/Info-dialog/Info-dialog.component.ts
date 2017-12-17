import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { inject } from '@angular/core/testing';
import { EleverService } from '../../elever.service';
import { Elev } from '../../MyInterface/Elev';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-Info-dialog',
  templateUrl: './Info-dialog.component.html',
  styleUrls: ['./Info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
elev:Elev;
test:Elev;
elever$: Observable<Elev[]>;
  constructor(private elevService:EleverService, public dialogRef:MatDialogRef<InfoDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


  onCloseConfirm(){
    
    
    
    
this.dialogRef.close("Bekreft");
  }
  onCloseCancle(){
    this.dialogRef.close('Cancle');
  }

  ngOnInit() {
    this.elever$=this.elevService.getAllElever();
    this.elever$.subscribe(
     
        resultArray => this.elev = resultArray[this.data],
  
        error => console.log("Error :: " + error)
    )

  }

}


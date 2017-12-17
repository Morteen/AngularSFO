import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { inject } from '@angular/core/testing';
import { EleverService } from '../elever.service';
import { Observable } from 'rxjs/Observable';
import { Elev } from '../MyInterface/Elev';
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
elev:Elev;

elever$: Observable<Elev[]>;
test:Elev[];
  constructor(private elevService:EleverService, public dialogRef:MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


  onCloseConfirm(id:number,fname:string,ename:string,trinn:number=0,klasse:string,tlf:string,info:string){
    if(fname==null||fname==""){
      fname=this.test[id].fname;
    }
    if(ename==null||ename==""){
      ename=this.test[id].ename;
    }
    if(trinn==null||trinn==0){
      trinn=this.test[id].trinn;
    }
    if(klasse==null||klasse==""){
      klasse=this.test[id].klasse;
    }
    if(info==null||info==""){
      info=this.test[id].info;
    }
    if(tlf==null||tlf==""){
      tlf=this.test[id].tlf;
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
    this.elever$=this.elevService.getAllElever();
    this.elever$.subscribe(
      resultArray => this.test = resultArray,
    
      error => console.log("Error :: " + error)
     
     
    );
   
  }

}


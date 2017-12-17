import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { inject } from '@angular/core/testing';
import { EleverService } from '../elever.service';
import { Observable } from 'rxjs/Observable';
import { Elev } from '../MyInterface/Elev';
import { DataService } from '../MyServices/data.service';
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
elev:Elev;

elever$: Observable<Elev[]>;
test:Elev[];
_elev:Elev
  constructor(private elevService:EleverService,private dataservice:DataService, public dialogRef:MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:number ){ }


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
 this._elev=this.test.find(elev=>elev.id==id);
    this._elev.fname=fname;
    this._elev.ename=ename;
    this._elev.id=id;
    this._elev.klasse=klasse;
    this._elev.trinn=trinn;
    this._elev.tlf=tlf;
    this._elev.info=info;

    this.dataservice.changeElev(this._elev);
    //currentElev.subscribe(elev=>this._elev=elev)
    
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


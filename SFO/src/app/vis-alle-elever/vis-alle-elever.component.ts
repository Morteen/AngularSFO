import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EleverService } from '../elever.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';




@Component({
  selector: 'app-vis-alle-elever',
  templateUrl: './vis-alle-elever.component.html',
  styleUrls: ['./vis-alle-elever.component.css']
})
export class VisAlleEleverComponent implements OnInit {
  elever:Elev;
  
 dialogResult="";



  constructor(private elevService:EleverService,public dialog:MatDialog) { }

  ngOnInit() {
    this.elever=this.elevService.visAlleElever();
     
    }

openDialog(id:number){
  console.log(id);
  let dialogref= this.dialog.open(MyDialogComponent,{
    width:'600px',
    data:id-1,
  
      });
  dialogref.afterClosed().subscribe(result=>{
    console.log('"Dialogen stengt: "${result}')
    this.dialogResult=result;
    this.upDatelist(8,"Test","#####","67893");
  })
  
}

    visAlle(){
      return this.elever;
    }
    upDatelist(id:number,fname:string,ename:string,tlf:string){
      this.elever[id-1].fname=fname,
      this.elever[id-1].ename=fname,
      this.elever[id-1].tlf=tlf
    }
  
    

  

  






}



/*this.http.get<Elev>("../../assets/json/elever.json").subscribe(data => {
  // Read the result field from the JSON response.
  this.elever = data;
  console.log("Dette er konsol.log av elever"+this.elever)
  });


*/


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

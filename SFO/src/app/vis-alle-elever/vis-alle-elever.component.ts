import { Component, OnInit, Inject } from '@angular/core';
import{ChangeDetectorRef}from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EleverService } from '../elever.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Location } from '@angular/common';
import { InfoDialogComponent } from '../Modaler/Info-dialog/Info-dialog.component';




@Component({
  selector: 'app-vis-alle-elever',
  templateUrl: './vis-alle-elever.component.html',
  styleUrls: ['./vis-alle-elever.component.css']
})
export class VisAlleEleverComponent implements OnInit {
  elever:Elev;
  res:Elev;
  
 dialogResult="";



  constructor(private elevService:EleverService,public dialog:MatDialog,public dialog2:MatDialog){}
    
  

   

  ngOnInit() {
    this.elever=this.elevService.visAlleElever();
     
    }

    openInfoDialog(id:number){
      console.log(id);
      let dialogref= this.dialog2.open(InfoDialogComponent,{
        width:'600px',
        
        data:id-1,
      
          });dialogref.afterClosed().subscribe(result=>{
            
            console.log("Info Dialogen stengt:"+result)
            this.dialogResult=result;
            this.res=result;
           
              
          })
          
        }

openDialog(id:number){
  console.log(id);
  let dialogref= this.dialog.open(MyDialogComponent,{
    width:'600px',
    data:id-1,
  
      });

  dialogref.afterClosed().subscribe(result=>{
    
    console.log("Dialogen stengt:"+result)
    this.dialogResult=result;
    this.res=result;
   
      
  })
  
}
refresh(){
  this.elever=this.elevService.visAlleElever();
}
    visAlle(){
      return this.elever;
    }
    upDatelist(id:number,fname:string,ename:string,tlf:string){
      this.elever[id].fname=fname,
      this.elever[id].ename=fname,
      this.elever[id].tlf=tlf
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

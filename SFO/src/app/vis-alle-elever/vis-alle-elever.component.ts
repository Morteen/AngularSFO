import { Component, OnInit, Inject } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EleverService } from '../elever.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Location } from '@angular/common';
import { InfoDialogComponent } from '../Modaler/Info-dialog/Info-dialog.component';
import { elev } from '../MyClasses/elev';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../MyServices/data.service';
import { Elev } from '../MyInterface/Elev';
import * as _ from "lodash";
import { orderBy } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
const MAXTRINN = 4;



@Component({
  selector: 'app-vis-alle-elever',
  templateUrl: './vis-alle-elever.component.html',
  styleUrls: ['./vis-alle-elever.component.css']
})
export class VisAlleEleverComponent implements OnInit {
  elever: Elev[] = [];
  sortertElever: Elev[] = [];
  antTrinn: number[] = [1, 2, 3, 4]
  _elev: Elev;
  res: Elev;
  navn: string
  trinn: number = 0;
  dialogResult = "";
  elever$: Observable<Elev[]>;

  constructor(private elevService: EleverService, private dataservice: DataService, public dialog: MatDialog, public dialog2: MatDialog) { }





  ngOnInit() {

    this.elever$ = this.elevService.getAllElever();
    this.elever$.subscribe(
      resultArray => this.elever = resultArray,


      error => console.log("Error :: " + error)


    );







  }

  sortTabell() {
    if (this.trinn == 0) {
      this.elever.sort((a, b) => {
        if (a.trinn == b.trinn) {
          let comparison = 0;
          if (a.klasse > b.klasse) {
            comparison = 1;
          } else if (a.klasse < b.klasse) {
            comparison = -1;
          }
          return comparison
        } else {
          return a.trinn - b.trinn
        }
      }
      )


    }
  }

  openInfoDialog(id: number) {
    console.log(id);
    let dialogref = this.dialog2.open(InfoDialogComponent, {
      width: '600px',

      data: id - 1,

    }); dialogref.afterClosed().subscribe(result => {

      console.log("Info Dialogen stengt:" + result)
      this.dialogResult = result;
      this.res = result;


    })

  }

  openDialog(id: number) {
    console.log(id);
    let dialogref = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: id - 1,

    });

    dialogref.afterClosed().subscribe(result => {

      //Prøver å dynamisk oppdatere listen
      this.dataservice.currentElev.subscribe(elev => this._elev = elev)
      this.elever[this._elev.id] = this._elev
      this.elevService.cast.subscribe(navn => this.navn = navn);

      console.log("Dialogen stengt:" + result)
      this.dialogResult = result;
      this.res = result;


    })

  }
  test(fname: string, ename: string) {

    console.log("Knappen virker og id' n er:" + fname + " " + ename)
    this.elevService.editStudent(fname + " " + ename);

  }
  visAlle() {
    return this.elever;
  }
  upDatelist(id: number, fname: string, ename: string, tlf: string) {
    this.elever[id].fname = fname,
      this.elever[id].ename = fname,
      this.elever[id].tlf = tlf
  }




  getTrinn(innTrinn: number, event: any) {
    event.preventDefault();
    this.trinn = innTrinn

  }
  setTrinn(elev: Elev) {
    var sjekk = false;
    if (this.trinn == 0) {
      sjekk = true;
    }
    else if (this.trinn == elev.trinn) {
      sjekk = true;
    }

    return sjekk;


  }
  addOne() {
    if (this.trinn == MAXTRINN) {
      this.trinn = MAXTRINN;
    }
    else {
      this.trinn++;
    }
   
  }
  subOne() {
    if (this.trinn == 0) {
      this.trinn = 0;
    } else {
      this.trinn--;
    }
    
  }







}







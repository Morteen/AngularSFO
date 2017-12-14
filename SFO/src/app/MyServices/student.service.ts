import { Injectable } from '@angular/core';
import{BehaviorSubject}from 'rxjs/BehaviorSubject';
import { Elev } from '../MyInterface/Elev';

@Injectable()
export class StudentService {
  elev:Elev;
  makeElev(){
     this.elev.fname="kari",
    this.elev.ename="Olsen"
    return this.elev;
  }
  private student= new BehaviorSubject<Elev>(this.makeElev())
cast=this.student.asObservable();
  constructor() { }
editStudent(newStudent){
  this.student.next(newStudent)
}
}
/*private elev: Elev[];
private observableElev: BehaviorSubject<Elev[]>;  

constructor() {
  this.elev = new Array<Elev>;  
  this.observableElev = <BehaviorSubject<Elev[]>>new BehaviorSubject([]);
}

getElev() {
  return this.observableElev.asObservable();
}

addElev(elev: Elev) {
  this.elev.push(elev);
  this.observableElev.next(Object.assign({}, this.elev));
}*/

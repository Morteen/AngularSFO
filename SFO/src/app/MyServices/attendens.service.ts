import { Injectable } from '@angular/core';
import {HttpClient,HttpParams, HttpHeaders} from "@angular/common/http";
import {IAttendens }from '../MyInterface/IAttendens'
import {Observable} from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { MessageService } from './message.service';
import { Attendens } from '../MyClasses/attendens';
import{Http, Response} from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const params = new HttpParams()
.set('?ElevId=', '"$id"')
.set('limitToFirst', "1");

@Injectable()
export class AttendensService {
  URL:string="http://localhost:3000/Oppmote?ElevId="
  attendens$: Observable<IAttendens[]>;
  
  constructor(private http:HttpClient,private messageService: MessageService) { }


  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('Attendens service:' + message);
}
ngOnInit() {
 
}
  



getAllAt(id:number){ 
return this.attendens$ = this.http
.get(this.URL+id, {params})
.do(console.log)
.map(data => _.values(data))
}












}
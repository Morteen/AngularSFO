import { Injectable } from '@angular/core';
import {HttpClient,HttpParams, HttpHeaders} from "@angular/common/http";
//import {Attendens }from '../MyInterface/Attendens'
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

import { elev } from '../MyClasses/elev';
import { IAttendens } from '../MyInterface/IAttendens';
const _url:string="http://localhost:3000/Oppmote";
@Injectable()
export class AttendensService {
  
  visEnURL:string="http://localhost:3000/Oppmote?ElevId=1";
  
  oppM$:Observable<any>;
temp:Attendens[]=[];
att : Attendens[]=[];
i:number=0;
  constructor(private http:HttpClient,private messageService: MessageService) { }


  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('Attendens service:' + message);
}
ngOnInit() {
  //this.test()
}
  visOppmote(id:number){
    this.oppM$=this.http.get(this.visEnURL+id);


    
     
    return this.oppM$;
         
        }
        /*visOppmote(id:number){
           this.http.get(this.visEnURL+id)
          .map((response : Response) => response.json())
          .subscribe((result:any) => {
              this.att = result;
            
          });
          
      
      console.log(this.att)
        
      return this.att
         
               
              }*/
      
visAlle(){
  this.oppM$=this.http.get("http://localhost:3000/Oppmote")
    console.log("Dette er konsol.log av oppmøte" + this.oppM$)
  
  return this.oppM$;

}


getOppM (id:number): Observable<Attendens[]> {
  return this.http.get<Attendens[]>(this.visEnURL+id).pipe(
    tap(heroes => this.log(`fetched heroes`)),
    catchError(this.handleError('getOppM', []))
  );
}


getTest(id: number): Observable<Attendens[]> {
  const url = `${this.visEnURL}/${id}`;
  return this.http.get<Attendens[]>(url).pipe(
    tap(_ => this.log(`Hentet oppmøte id=${id}`)),
    catchError(this.handleError<Attendens[]>(`ElevId=${id}`))
  );
}





private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    return null;
 
    
   
  };
}

getOppmote() : Observable <any> {
  console.log("Hei fra Oppmøte-service")
  return this.http.get(_url).map((res : Response) => res.json())
    .catch((error : any) => Observable.throw('Server error'));
   
   
}
test(){
return this.http.get(this.visEnURL)
.map((response : Response) => response.json())
.subscribe((result:any) => {
    this.att = result;
   
});
}


}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {IAttendens }from './MyInterface/IAttendens';
import { Elev } from './MyInterface/Elev';
import { BehaviorSubject, Subject } from 'rxjs';
import { elev } from './MyClasses/elev';
import { ElevState } from './MyClasses/ElevStat';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
const getAlleURL:string="http://localhost:3000/Elever";
const params = new HttpParams()
.set('orderBy', '"$key"')
.set('limitToFirst', "1");

@Injectable()
export class EleverService {
  elever: Elev;
  elev:Elev;
  body: Elev;
  att:IAttendens
  temp:string;
  ElevListe : elev []= [];
  URL:string="http://localhost:3000/Elever";
  elever$: Observable<Elev[]>;
  private elevSubject = new Subject<ElevState>();

  attendens: any[];
  private navn= new BehaviorSubject<string>('Hei');
  cast=this.navn.asObservable();

  constructor(private http: HttpClient) { }

  editStudent(newNavn){
    this.navn.next(newNavn)
   
  }
  
 
  
 


  visAlleElever() {
    
    this.http.get<Elev>(getAlleURL).subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data;
      
    });
    return this.elever;
  }

  getAllElever(){ 
    return this.elever$ = this.http
    .get(this.URL, {params})
    .do(console.log)
    .map(data => _.values(data))
    }
    


 visEn(id:number){
   
    this.http.get<Elev>("http://localhost:3000/Elever/"+id).subscribe(data => {
    
      this.temp=data.fname+" "+data.ename;
     
        });
       return this.temp;
      }

  postEnElev(fname: string, ename: string, tlf: string, info: string, trinn: number, klasse: string) {
    
      const body={
        fname:fname,
        ename:ename,
        tlf:tlf,
        info:info,
        trinn:trinn,
        klasse:klasse
      }

    //http://localhost:3000/Elever
    //../assets/json/elever.json
    this.http.post("http://localhost:3000/Elever", body).subscribe(data => {



      console.log("Dette er loggen fra test-posten" + data)


    });


  };


  addProduct(_elev:any) {
    console.log('in service');
    this.ElevListe.push(_elev)
    this.elevSubject.next(<ElevState>{loaded: true, elever: this.ElevListe});
  }



  oppdater(id:number,fname:string,ename:string,trinn:number,klasse:string,tlf:string,info:string){

    const body={
      
      fname:fname,
      ename:ename,
      tlf:tlf,
      info:info,
      trinn:trinn,
      klasse:klasse
    }
    const index=id+1;

    this.http.put("http://localhost:3000/Elever/"+index,body).subscribe(data => {
      
      
      
            console.log("Dette er loggen fra put metoden" + data)
      
      
          });

  }


  visAttendens(id:number) {
     this.http.get<IAttendens>('http://localhost:3000/Oppmote?ElevId=${id}').subscribe(data => {
      //"http://localhost:3000/Oppmote?ElevId="+1
        this.att=data;
        console.log("Dette er loggen fra elev service index 0 i oppmøte "+this.att)
          });
        
          return this.att;
        
  }


}






// finne oppmøte ved elevid: http://localhost:3000/Oppmote?ElevId=2
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EleverService {
  elever:Elev;
  attendens:any[];
  constructor(private http:HttpClient) { }

  visAlleElever(){
   this.http.get<Elev>("../assets/json/elever.json").subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data;
      console.log("Dette er konsol.log av elever"+this.elever)
      });
      return this.elever;
  }

  visEnElev(){

    this.http.get<Elev>("../assets/json/elever.json").subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data[0];

    return this.elever;
   
   
  });
  console.log("Dette er loggen for en elev fra Elevservice"+this.elever.fname)
  
};
  visAttendens(){
    this.attendens=this.elever[0].attendens;
    return this.attendens;
  }


}


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


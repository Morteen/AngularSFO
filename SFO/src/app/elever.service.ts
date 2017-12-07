import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EleverService {
  elever: Elev;
  elev:Elev;
  body: Elev;

  attendens: any[];
  constructor(private http: HttpClient) { }

  visAlleElever() {
    //../assets/json/elever.json
    this.http.get<Elev>("http://localhost:3000/Elever").subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data;
      console.log("Dette er konsol.log av elever" + this.elever)
    });
    return this.elever;
  }

 visEn(id:number){
    this.http.get<Elev>("http://localhost:3000/Elever/"+id).subscribe(data => {
    
      this.elev=data;
     
        });
       return this.elev;
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


  visAttendens() {
    this.attendens = this.elever[0].attendens;
    return this.attendens;
  }


}


interface Elev {
  fname: string,
  ename: string,
  tlf: string,
  info: string,
  trinn: number,
  klasse: string,
  attendens: [{
    dato: Date,
    sjekkinn: DateTimeFormat,
    sjekkUt: DateTimeFormat

  }

  ]
}


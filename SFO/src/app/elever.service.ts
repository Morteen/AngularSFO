import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EleverService {
  elever: Elev;
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

  visEnElev() {
    //http://localhost:3000/Elever
    //../assets/json/elever.json
    this.http.get<Elev>("http://localhost:3000/Elever").subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data[0];

      return this.elever;


    });
    console.log("Dette er loggen for en elev fra Elevservice" + this.elever)

  };

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

    this.http.put("http://localhost:3000/Elever/"+id,body).subscribe(data => {
      
      
      
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


import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EleverService } from '../elever.service';

@Component({
  selector: 'app-oppmote',
  templateUrl: './oppmote.component.html',
  styleUrls: ['./oppmote.component.css']
})
export class OppmoteComponent implements OnInit,OnDestroy {
 
  elever:Elev;
  elev:Elev;
  attendens:any[];
 navn:string;

 id: number;
 private sub: any;

  constructor(private http:HttpClient,private route: ActivatedRoute,eleverService:EleverService) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  
this.visEn(this.id);


}
ngOnDestroy() {
  this.sub.unsubscribe();
}
//../../assets/json/elever.json
visEn(id:number){
  this.http.get<Elev>("http://localhost:3000/Elever/"+id).subscribe(data => {
    // Read the result field from the JSON response.
    if(data==null){
      alert("Det er ikke noe data")
    }else{ this.elev = data;
      this.navn=this.elev.fname+" "+this.elev.ename;
      this.attendens=this.elev.attendens;
      if(this.elever.attendens!=null){
        alert("json levere");
      }
    }
   
    
   
    console.log("Dette er konsol.log av elever"+this.elev)
    });
  

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



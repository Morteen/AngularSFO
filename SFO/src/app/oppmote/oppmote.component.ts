import { Component, OnInit, OnDestroy } from '@angular/core';
import { EleverService } from '../elever.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private http:HttpClient,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
   
this.visEn(this.id-1);


}
ngOnDestroy() {
  this.sub.unsubscribe();
}
visEn(id:number){
  this.http.get<Elev>("../../assets/json/elever.json").subscribe(data => {
    // Read the result field from the JSON response.
    if(data==null){
      alert("Det er ikke noe data")
    }else{ this.elever = data;
      this.navn=this.elever[id].fname+" "+this.elever[id].ename;
      this.attendens=this.elever.attendens;
      if(this.elever.attendens!=null){
        alert("json levere");
      }
    }
   
    
   
    console.log("Dette er konsol.log av elever"+this.elever[id])
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



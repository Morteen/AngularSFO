import { Component, OnInit } from '@angular/core';
import { VisAlleEleverComponent } from '../vis-alle-elever/vis-alle-elever.component';
import { EleverService } from '../elever.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Elev } from '../MyInterface/Elev';
import { Attendens } from '../MyClasses/attendens';
import { IAttendens } from '../MyInterface/IAttendens';



@Component({
  selector: 'app-sjekk-inn',
  templateUrl: './sjekk-inn.component.html',
  styleUrls: ['./sjekk-inn.component.css']
})
export class SjekkInnComponent implements OnInit {

  elever$: Observable<Elev[]>;
totantall:number
antSjekketInn:number=0;
 elev:Elev;
 Oppmote:IAttendens;
 regKnptekst="Sjekk inn"

elever:Elev[];

  constructor(private elevService:EleverService) { }

  ngOnInit() {
    
      this.elever$=this.elevService.getAllElever();
      if(this.elever$!=null){
      
      this.elever$.subscribe(
        resultArray => this.elever = resultArray,
      
        error => console.log("Error :: " + error)
       
       
      );
      this.elever$.subscribe(
        ant => this.totantall = ant.length,
      );
      
    }



  }

reg(id:number){
 
  
}
  inn(id:number){
this.elev=this.elever.find(elev => elev.id==id);
this.elev.SjekkInn=true;
console.log("Virker"+ id+" "+this.elev.fname+" "+this.elev.SjekkInn)

////this.Oppmote.Dato= new Date().toLocaleString('en-NO');
//this.Oppmote.SjekkInn=new Date().toLocaleString('en-NO');

//this.liste[id].attendens.push(this.Oppmote);
this.antSjekketInn++
return this.elev.SjekkInn;

    

  }
  ut(id:number){
    this.elev=this.elever.find(elev => elev.id==id);
    this.elev.SjekkInn=false;
    console.log("Virker"+ id+" "+this.elev.fname+" "+this.elev.SjekkInn)
    
    ////this.Oppmote.Dato= new Date().toLocaleString('en-NO');
    //this.Oppmote.SjekkInn=new Date().toLocaleString('en-NO');
    
    //this.liste[id].attendens.push(this.Oppmote);
    
    return this.elev.SjekkInn;
    
        
    
      }



      cssVelger(test:boolean){
        if(test){
          return 'btn btn-primary'
        }else{
          return 'btn btn-danger'
        }

        

      }
      

}


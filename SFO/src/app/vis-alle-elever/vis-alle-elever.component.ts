import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vis-alle-elever',
  templateUrl: './vis-alle-elever.component.html',
  styleUrls: ['./vis-alle-elever.component.css']
})
export class VisAlleEleverComponent implements OnInit {


elever:Elev;


  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get<Elev>("../../assets/json/elever.json").subscribe(data => {
      // Read the result field from the JSON response.
      this.elever = data;
      console.log("Dette er konsol.log av elever"+this.elever)
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


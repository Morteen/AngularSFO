import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Elev } from '../MyInterface/Elev';

@Injectable()
export class DataService {
elev:Elev
  private messageElev = new BehaviorSubject<Elev>(this.elev);
  currentMessage = this.messageElev.asObservable();
  constructor() { }

  
  changeElev(_elev: Elev) {
    this.messageElev.next(_elev)
  }

}

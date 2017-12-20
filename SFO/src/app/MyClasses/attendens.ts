export class Attendens {
    
    id:number
   Dato: string
   SjekkInn: string
   SjekkUt: string
   elevId:number

constructor(elevId:number,SjekkInn: string)
{
    this.elevId=elevId;
    this.SjekkInn=SjekkInn;
} 
 }

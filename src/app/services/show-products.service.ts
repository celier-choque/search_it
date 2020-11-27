import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShowProductsService {

   public hide:any=[];

  constructor() { }

  setStateHide(){
    this.hide=[{state:false}];
    return this.hide;
  }

  setStateShow(){
    this.hide=[{state:true}];
    return this.hide;
  }

  getState(){
    return this.hide;
  }
}

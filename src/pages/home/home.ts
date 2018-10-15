import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  minQty = 0;
  value: number;
  uname: '';
  total= 58.99;
  wCream:string;
  choco: string;
  quantity: number;
  whipped_cream: boolean;
  chocolate: boolean;

  constructor(public navCtrl: NavController) {
    this.quantity = 0;

    this.whipped_cream = false;
    this.chocolate = false;
  }

  /*checkBox(){
    if(this.chocolate){
      this.whipped_cream = false;
    }else if(this.whipped_cream){
      this.chocolate = false;
    }

    if(this.whipped_cream){
      this.chocolate = false;
    }else if(this.chocolate){
      this.whipped_cream = false;
    }

  }*/

  incrementQty(){
    this.quantity += 1;
  }

  decrementQty(){
    if(this.quantity > this.minQty){
      this.quantity -= 1;
    }
    
  }

  order(){
    if(this.whipped_cream){
      this.wCream = '+Whipped Cream';
    }

    if(this.chocolate){
      this.choco ='+Chocolate';
    }
    this.value = 1;
  }

  reset(){
    this.value = 0;
    this.quantity = 0;
    this.uname = '';
    this.whipped_cream = false;
    this.chocolate = false;
  }

}

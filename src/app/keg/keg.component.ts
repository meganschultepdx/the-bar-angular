import { Component } from '@angular/core';

import { Keg } from '../Models/keg.model';


@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {
 public kegs: Keg[] = [
  new Keg('Christmas Ale', 'Great Lakes', 150, 8.7 ), 
  new Keg('Blatz', 'Blatz Brewing', 120, 5 ),
  new Keg('High Life', 'Miller', 130, 5 ),
  new Keg('Coors Light', 'Coors', 50, 4.5 )
  ];
  selectedKeg = {};
  newBeer = null;

 addKeg(newKeg, newBrand, newPrice, newAlcohol){
  //  if(this.kegs.length ) {
  let length = this.kegs.length;
  //  }
  //  this.kegs.splice(this.keg,1)
  let newLager = new Keg(newKeg, newBrand, newPrice, newAlcohol);
  this.newBeer =  this.kegs.push(newLager);
  
  if(this.newBeer <= length+1){
    this.kegs.splice((this.newBeer-length-1),1);
    console.log(this.kegs);
    
  }
  console.log(this.kegs);
  
   this.clearBeer();
 }

 clearBeer() {
   this.selectedKeg = {};
   this.newBeer = null;
 }

 showInfo(clickedBeer) {
   this.selectedKeg = clickedBeer;
   console.log(this);
   
 }

//  deleteBeer(keg) {
//    let beer = this.
//  }
 


  // addKeg(name: string): void {
  //   name = name.trim();
  //   if (!name) {return; }
  //   this.kegs.push(name);
  // }

}

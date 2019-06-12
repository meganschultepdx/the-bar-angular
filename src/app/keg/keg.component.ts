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
  let newLager = new Keg(newKeg, newBrand, newPrice, newAlcohol);
  this.newBeer =  this.kegs.push(newLager);
   this.clearBeer();
 }

 clearBeer() {
   this.selectedKeg = {};
   this.newBeer = null;
 }

 showInfo(clickedBeer) {
   this.selectedKeg = clickedBeer;
 }
 


  // addKeg(name: string): void {
  //   name = name.trim();
  //   if (!name) {return; }
  //   this.kegs.push(name);
  // }

}

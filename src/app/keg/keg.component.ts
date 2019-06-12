import { Component } from '@angular/core';

import { Keg } from '../Models/keg.model';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent {
 public kegs: Keg[] = [
  new Keg('Great Lakes Christmas Ale'), 
  new Keg('Blatz Premium Lager'),
  new Keg('Miller High Life'),
  new Keg('Coors Light')
  ];
  selectedKeg = null;
 addKeg(newKeg) {
   let addedKeg = newKeg;
   this.selectedKeg = this.kegs.push(addedKeg);
 }


  // addKeg(name: string): void {
  //   name = name.trim();
  //   if (!name) {return; }
  //   this.kegs.push(name);
  // }

}

import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg: null;
  masterKegList: Keg[] = [
    new Keg("Blue Tap", "PBR", "3.50", "4.4"),
    new Keg("Red Tap", "Samuel Adams", "5.50", "5.6"),
    new Keg("Green Tap", "Blue Moon", "5.75", "6.2"),
    new Keg("Yellow Tap", "Fancy Dark Beer", "7.50", "7.8"),
    new Keg("Purple Tap", "IPA", "5.50", "8.9"),
    new Keg("Horseshoe Tap", "Sour Beer", "7.80", "7.2"),
  ];

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
    console.log(this.masterKegList);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
   this.selectedKeg = null;
 }
}

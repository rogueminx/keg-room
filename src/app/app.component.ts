import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg: null;
  masterKegList: Keg[] = [];

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

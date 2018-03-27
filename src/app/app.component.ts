import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterKegList: Keg[] = [];

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }
}

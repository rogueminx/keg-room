import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm (name: string, brand: string, price: string, alcoholContent: string) {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.sendKeg.emit(newKeg);
  }

}

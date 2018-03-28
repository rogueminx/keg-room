import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit);
}

  sellPintClicked(keg) {
  keg.amountLeft -= 1;
  }

  nearEmpty(keg){
    if (keg.amountLeft <= 10) {
      return "nearEmpty"
    } else {
      return "nearFull"
    }
  }

  expensiveKeg(keg){
    if( keg.price >= 7.01) {
      return "$$$"
    } else if ((keg.price >= 5) && (keg.price <= 7)) {
      return "$$"
    } else {
      return "$"
    }
  }

  alcoholContent(keg){
    if (keg.alcoholContent >= 6) {
      return "highContent"
    } else {
      return "lowContent"
    }
  }
}

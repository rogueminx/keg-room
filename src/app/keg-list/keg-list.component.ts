import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';
import { FormsModule } from '@angular/forms';
import { KegService} from '../keg.service';
import { FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css'],
  providers: [KegService]
})
export class KegListComponent implements OnInit{
  kegs: FirebaseListObservable<any[]>;

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  constructor(private KegService: KegService){}

  ngOnInit() {
    this.kegs = this.KegService.getKegs();
  }

  editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit);
}

  filterByEmptiness: string = "fullKeg";

  onChange(optionFromMenu) {
  this.filterByEmptiness = optionFromMenu;
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

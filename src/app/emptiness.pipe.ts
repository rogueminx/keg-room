import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';


@ Pipe ({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredEmptiness){
    var output: Keg[] = [];
    if (desiredEmptiness === "halfFullKeg") {
      for (let i = 0; i < input.length; i++) {
        if ((input[i].amountLeft <= 99) && (input[i].amountLeft >= 31)) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "almostEmptyKeg") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].amountLeft <= 30) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "fullKeg") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].amountLeft >= 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): any {
    if(value) {
      if(args.length > 0) {
        return value.totalTtc();
      }
      return value.totalHt();
    }
    return null;
  }

}


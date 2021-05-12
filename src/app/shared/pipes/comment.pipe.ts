import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value) {
      if(value.length >= 10) {
        return value.toUpperCase();
      }
      return value;
    }
    return null;
  }

}

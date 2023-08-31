import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class canFlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value 
    ? 'vuela'
    : 'no Vuela'
  }

}

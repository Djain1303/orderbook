import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (args) {
        return value.filter((item) => {
          const keys = Object.keys(item);
          for (const singleKey of keys) {
            console.log(item[singleKey],args);
            if (item[singleKey] == args) {
              return item;
            }
          }
        });
      } else {
        return value;
      }
    }
    return null;
  }

}

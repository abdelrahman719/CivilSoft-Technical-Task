import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser',
  pure:false
})
export class FilterUserPipe implements PipeTransform {

   transform(arr:any,value:string) {

    return arr.filter( (el:any) =>  el.name.startsWith(value) ||el.code.startsWith(value) ||el.jobTitle.startsWith(value) )


   }

}

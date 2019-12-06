import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(listData:any,searchText:string): any {
   if(!searchText){
     return listData
   }
   return listData.filter((text)=>{
     return text.title.toLowerCase().match(searchText.toLowerCase())
   })
  }

}

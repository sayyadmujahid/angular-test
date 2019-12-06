import { Component, OnInit } from '@angular/core';
import { Test200Service } from './test200.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ListData: any;
  rowJSONData: any;
  id:any;
 constructor(private testService:Test200Service){
 }
 getListData(){
   this.testService.getListData().subscribe(res=>{
     this.ListData=res['hits'];
   })
 }
 getRowData(item:any){
   this.rowJSONData=item;
 }
 ngOnInit(){
 this.getListData();
 this.id = setInterval(() => {
  this.getListData();
}, 10000);
 }

 ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
 }
}

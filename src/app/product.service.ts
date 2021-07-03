import { Injectable,Input } from '@angular/core';
import { AddComponent } from './add/add.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    dataList:any;

  constructor() { }
  setData(data:any) {
     if(!this.dataList) {
      this.dataList = []
     }
     this.dataList.push(data)
  };
  getData(){
    return this.dataList
  }
  delete(id:any){
    return this.dataList.delete
  }
}

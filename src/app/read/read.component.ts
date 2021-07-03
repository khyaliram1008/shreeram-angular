import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from '../product.service';
import { AddComponent } from '../add/add.component';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
   list:any=[];
  constructor(private product:ProductService,
              private router:Router) { }

  ngOnInit(): void {
     this.getData()
    // let savedDatac  = this.product.getData()
    
    // var i=0;
    //  if(savedData.length) {
    //    this.list.patchValue(savedData[i])
    
  
}

getData(){
  
  this.list=this.product.getData()
  // console.log(this.list)
}
delete(item:any){
  this.list.splice(item-1,1)
  this.product.delete(item).subscribe((res:any)=>
 {
   console.log("result", res)
})
}
edit(item:any){
  this.router.navigateByUrl('/add')
}
}

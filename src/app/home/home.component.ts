import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   lis:any=[];
  constructor(private productserv:ProductService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    
    this.lis=this.productserv.getData()
    console.log(this.lis)
  }

}

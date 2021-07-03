import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'product';
  constructor(private router: Router){
  }
  redirect(url:any){
    this.router.navigateByUrl(url)
  }
  ngOnInit(){

  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { AddComponent } from './add/add.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule, NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

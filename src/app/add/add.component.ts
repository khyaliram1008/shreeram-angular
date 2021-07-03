import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {FormBuilder, FormGroup, RequiredValidator, Validators} from '@angular/forms'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // @Input()
  name:any=[];
  userForm: FormGroup
  constructor(private productservice: ProductService,
    private fb: FormBuilder,
    router: Router) {
    this.userForm= this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]],
      // lastName: ['', [Validators.required]],
      emailid: ['', []]
    })
  }

  ngOnInit(): void {
    let savedData  = this.productservice.getData()
    var i=0;
     if(savedData && savedData.length) {
       this.userForm.patchValue(savedData[i])
     }
   
  }


submit(){
  //console.log(this.userForm.value)
  let data:any = this.userForm.value
      this. productservice.setData(data)
       this.userForm.reset()

}
}
// import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})

export class ProfileformComponent implements OnInit {

  profileForm!: FormGroup;
  obj: any = {};
  array: any = []
  arr :any = []
   detail:any;
  sectionSubmitted = false;
  buttonText: string = "";
  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.required],
      modal: [null, Validators.required],
      price: [null, Validators.required],
      color: [null, Validators.required],
      wheels: [null, Validators.required]
    })
    this.detail = localStorage.getItem("array");
this.arr = JSON.parse(this.detail)
  }
  get f() { return this.profileForm.controls };

  addterm() {
    this.sectionSubmitted = false;
    if (this.profileForm.invalid) {
      return;
    }
 
  
    if(localStorage.getItem('array') === null ){
      this.array = [];
    }
    else{
      this.detail = localStorage.getItem("array");
      this.array = JSON.parse(this.detail)
    }    
    this.array.push(this.obj)
    localStorage.setItem('array', JSON.stringify(this.array));
    this.detail = localStorage.getItem("array");

    this.array = JSON.parse(this.detail)
    
  
    
    console.log(this.array)
    this.ngOnInit()
  }



   
  

}
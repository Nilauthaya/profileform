// import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})

export class ProfileformComponent implements OnInit {

  profileForm!: FormGroup;
  obj:any = {};
  sectionSubmitted = false;
  buttonText:string = "";
  constructor(
    private formBuilder: FormBuilder ,
     ) { 
     }
    
  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.required],
      modal:[null,Validators.required],
      price:[null,Validators.required],
      color:[null,Validators.required],
      wheels:[null,Validators.required]
    })
    console.log(this.obj)
  }
  get f() { return this.profileForm.controls };

  addterm(){
    this.sectionSubmitted = true;
    if(this.profileForm.invalid){
      return;
     
    }
  }

}
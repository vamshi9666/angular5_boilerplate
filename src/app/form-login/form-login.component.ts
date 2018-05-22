import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
 myForm : FormGroup;

	langs:string[]=[
	'english',
	'French',
	'german']

  constructor() { }

  ngOnInit() {
    
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required)
      }),
      email:new FormControl('',[Validators.required,Validators.pattern("[^@]*@[^@]*")]    ),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      lang : new FormControl('',Validators.required)

    })
  }
  selected = 'true'
}

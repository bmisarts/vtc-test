import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup | any;
  public submited = false;
  
  constructor(
    private _formBuilder: FormBuilder,
  ){}
  
  
  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginForm.valueChanges.subscribe( () => {
      this.submited = false;
    });
  }
  
  onSubmit(){
    this.submited = true;
  }
}

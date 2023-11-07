import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    public router: Router
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
    if(this.loginForm.valid){
      this.loginForm.valueChanges.unsubscribe();
      sessionStorage.setItem('currentUser', JSON.stringify({ 
        ID: this.loginForm.value["identifiant"], pw: this.loginForm.value["password"] 
      }));
      setTimeout( () => {      
        this.router.navigate(["/dashboard"])
      }, 5000)
    }
  }
}

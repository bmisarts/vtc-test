import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  implements OnInit {

  public logoutForm: FormGroup | any;
  public submited = false;
  
  constructor(
    private _formBuilder: FormBuilder,
    public router: Router
  ){}
  
  ngOnInit() {
    this.logoutForm = this._formBuilder.group({
      identifiant: ['', Validators.required],
    });
    this.logoutForm.valueChanges.subscribe( () => {
      this.submited = false;
    });
  }
  
  onSubmit(){
    this.submited = true;
    if(this.logoutForm.valid){
      this.logoutForm.valueChanges.unsubscribe();
      sessionStorage.clear();
      localStorage.clear();
      setTimeout( () => {
        this.router.navigate(["/"])
      }, 2000)
    }
  }
}

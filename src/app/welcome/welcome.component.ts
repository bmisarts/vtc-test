import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  public languages = [
    {name: 'Français', value: 'fr'},
    {name: 'English', value: 'en'},
  ]
  constructor(public router: Router) {}
  
  ngOnInit(){
  }
  
  setLaguage(e: any){
    localStorage.setItem('language', e.target.value)
    this.router.navigate(["/dashboard"])
  }

}

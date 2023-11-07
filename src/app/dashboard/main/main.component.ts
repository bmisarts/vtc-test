import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  toggle() {
    let menu_toggle = document.querySelector(".menu_toggle");
    menu_toggle?.addEventListener("click", function(){
        document.querySelector("body")?.classList.toggle("active");
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  toggle() {
    let menu_toggle = document.querySelector(".menu_toggle");
    menu_toggle?.addEventListener("click", function(){
        document.querySelector("body")?.classList.toggle("active");
    })
  }
}

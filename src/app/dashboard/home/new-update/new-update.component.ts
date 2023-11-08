import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.scss'],
  providers: [DatePipe]
})
export class NewUpdateComponent implements OnInit {

  public objs: any = [];
  
  constructor(
    public datePipe: DatePipe
  ){
    this.objs = [
      {
        id: "TO N0- 00009 DU 22/10/2023 XX",
        name: "OBJET XX GPFD ET AUTRES XX",
        date: new Date()
      },
      {
        id: "TO N0- 00010 DU 22/10/2023 XX",
        name: "OBJET XX GPFD ET AUTRES XX",
        date: new Date()
      },
      {
        id: "TO N0- 00011 DU 22/10/2023 XX",
        name: "OBJET XX GPFD ET AUTRES XX",
        date: new Date()
      },
      {
        id: "TO N0- 00012 DU 22/10/2023 XX",
        name: "OBJET XX GPFD ET AUTRES XX",
        date: new Date()
      }
    ];
  }
  
  ngOnInit()  {
  }
}

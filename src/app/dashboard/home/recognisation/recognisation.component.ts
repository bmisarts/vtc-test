import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recognisation',
  templateUrl: './recognisation.component.html',
  styleUrls: ['./recognisation.component.scss'],
  providers: [DatePipe]
})
export class RecognisationComponent implements OnInit {

public completed: any = [];
public progress: any = [];
public not_found: any = [];

constructor(
  public datePipe: DatePipe
){
  this.completed = [
    {
      image: "assets/images/face.png",
    },
    {
      image: "assets/images/face.png",
    },
    {
      image: "assets/images/face.png",
    },
    {
      image: "assets/images/face.png",
    },
  ];
}

ngOnInit()  {
}
}

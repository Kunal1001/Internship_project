import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public data="hello yo!"; 
  public color = "text-primary"
  public con= false;
  public pd = [
    {
      name: "Sq",
      id:2,
    },
    {
      name: "Sw",
      id:3,
    },
    {
      name: "Se",
      id:4,
    },
    {
      name: "Sr",
      id:1,
    },
    {
      name: "St",
      id:5,
    },
  ]

}

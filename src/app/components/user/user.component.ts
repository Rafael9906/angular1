import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent  {

  constructor() { }

  //Variables

  isLogged: boolean = false
  level: number = 5

}

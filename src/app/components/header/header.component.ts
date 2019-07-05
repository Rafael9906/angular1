import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log("componente creado")
   }

  ngOnInit() {
    console.log("component")
  }

  //Variables
  count = 0
  arr = [1,2,3,4,5,6,7,8,9,10]

  //Functions
  sum(){
    this.count++
  }

  add(){
    this.arr.push(Math.random())

  }

}

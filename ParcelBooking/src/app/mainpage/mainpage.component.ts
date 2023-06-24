import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  // uname= localStorage.getItem('uname');


 uname= localStorage.getItem('uname') ?? '';
  constructor(){
  console.log(this.uname);
  console.log(this.uname);
  }
}

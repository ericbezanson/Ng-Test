import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />

  `
})
export class CoursesComponent implements OnInit {
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  text = '';
  onKeyUp() {
    console.log(this.text);
  }


  constructor() { }

  ngOnInit() {
  }

}

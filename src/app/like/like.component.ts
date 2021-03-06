import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  star = 'glyphicon-star';
  emptyStar = 'glyphicon-star-empty';
  @Input() liked: boolean;
  status = this.emptyStar;

  onClick() {
   this.liked = !this.liked;
  }

  constructor() { }

  ngOnInit() {
  }

}

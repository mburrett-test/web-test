import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.less']
})
export class SecondComponent implements OnInit {
  imgVisible = true;

  constructor() {}

  ngOnInit(): void {}

  deleteImg(): void {
    this.imgVisible = false;
  }

  restoreImg() {
    this.imgVisible = true;
  }
}

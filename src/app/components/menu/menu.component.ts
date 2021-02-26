import {Component, OnInit} from '@angular/core';

interface IMenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  constructor() {}

  menu: Array<IMenuItem> = [
    {text: 'Home', route: '/start'},
    {text: 'First Component', route: '/first'},
    {text: 'Second Component', route: '/second'}
  ];

  ngOnInit(): void {}
}

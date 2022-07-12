import { Menuitem } from './models/menuitems';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItem: Menuitem[] = [
    { label: 'home', url: '/'},
    { label: 'animals', url: '/animals'},
    { label: 'biome', url: '/biome'},
    { label: 'items', url: '/items'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

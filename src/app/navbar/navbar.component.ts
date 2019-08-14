import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  images = ['wind.png', 'charcoal.jpg', 'win10.jpg'];
  navItem = [{item: 'Home', icn: '', act: true}, {item: 'About Us', icn: '', act: false},
    {item: 'Product', icn: '', act: false}, {item: 'Contact', icn: '', act: false},
    {item: '', icn: 'shopping-cart', act: false}];
  public  activeNav = true;
  constructor() { }

  ngOnInit() {
  }

}

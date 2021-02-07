import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name="";
  url="";
  constructor(private router:Router) {
    this.url=JSON.parse(localStorage.getItem("img_url"));
    if(!this.url)
    {
      this.url="../../assets/img/user.png";
    }
    this.name=JSON.parse(localStorage.getItem("username"));
  }

  ngOnInit() {
  }
  logout()
  {
    localStorage.clear();
  }
}

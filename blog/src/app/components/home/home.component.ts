import { Component, OnInit, HostListener, Host } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  @HostListener('window:scroll')
  showTopButton() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      (document.querySelector(".scroll") as HTMLElement).style.display = 'block';
    } else {
      (document.querySelector(".scroll") as HTMLElement).style.display = 'none';
    }
  }
}

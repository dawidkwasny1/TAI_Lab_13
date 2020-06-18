import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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

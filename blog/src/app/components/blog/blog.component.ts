import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string;
  public items$: any;

  constructor(private service: DataService) {

   }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
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

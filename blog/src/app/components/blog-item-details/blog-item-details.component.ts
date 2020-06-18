import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image: string;
  public text: string;
  public title: string;
  public id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.id=params.get('id');
      });

      this.dataService.getById(this.id).subscribe(res => {
        this.image = res['url'];
        this.text = res['content'];
        this.title = res['title'];
      });
  }

}

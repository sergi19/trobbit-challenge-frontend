import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats: any[] = [];

  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit(): void {
    this.cats = this.route.snapshot.data['data']['cats'];
  }

  deleteCat(catId: string) {
    this.catService.deleteCat(catId)
      .subscribe(resp => this.catService.getCatImages());
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { card } from 'src/app/model/card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  card: Observable<card>;
  
  constructor(public activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.card = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.card))
      console.log(this.card)
  }

}

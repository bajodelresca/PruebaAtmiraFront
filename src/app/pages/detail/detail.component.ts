import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from 'src/app/model/card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
card:string
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(parametros => {
      this.card = parametros['card'];      
    });
    console.log(this.card)
   }

  ngOnInit(): void {
  }

}

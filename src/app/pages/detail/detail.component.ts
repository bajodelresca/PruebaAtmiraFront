import { Location } from '@angular/common';
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
  card: card;
  isVideo=false;
  isImage=false;

  constructor(public activatedRoute: ActivatedRoute,
    private _location:Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state.card)).subscribe((data) => {
        this.card=data
        if(this.card.media_type=="image"){
          this.isImage=true
        }else if(this.card.media_type=="video"){
          this.isVideo=true
        }
      });
      this.card
    console.log(this.card)
  }
  goBack(){
    this._location.back();
  }


}

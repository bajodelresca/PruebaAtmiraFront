import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { card } from 'src/app/model/card';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: Array<card> = [];
  constructor(private http: HttpClient,
    private functionService: FunctionsService,
    private router:Router) { }

  async ngOnInit(): Promise<void> {
    await this.functionService.getDate()
    if(this.functionService.list.length==0){
      await this.loadPictures()
    }
    
  }

  navigateWithState(card) {
    this.router.navigateByUrl('detail', {state:{card}});
  }

  getdate() {
    let date = new Date()

  }


  public async loadPictures() {
    try {
      this.list = await this.functionService.getPicture();
      console.log(this.list)
    } catch (err) {
      this.list = null; //vista
    }
  }
  show(card: card) {
    console.log(card)
  }
}

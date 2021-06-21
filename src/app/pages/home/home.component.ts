import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/model/card';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: Array<card>;
  constructor(private http:HttpClient,
    private functionService:FunctionsService) { }

  ngOnInit(): void {
    this.loadPictures()
  }
getdate(){
  let date=new Date()

}


public async loadPictures() {
  try {
    this.list = await this.functionService.getPicture();
    console.log(this.list)
  } catch (err) {
    this.list = null; //vista
  }
}

}

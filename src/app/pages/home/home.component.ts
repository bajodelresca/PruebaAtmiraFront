import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { card } from 'src/app/model/card';
import { FunctionsService } from 'src/app/services/functions.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list: Array<card> = [];
  numberpictures = 0
  
  constructor(private http: HttpClient,
    private functionService: FunctionsService,
    private router: Router,
    private utils: UtilsService) { }

  async ngOnInit(): Promise<void> {
    do {
      const date: Date = new Date();
      const dateurl: Date = new Date();
      dateurl.setDate(date.getDate() - this.numberpictures)
      this.numberpictures++
      console.log(this.numberpictures)
      this.loadPictures(this.utils.getDate(dateurl))

    } while (this.numberpictures < 6);



  }

  navigateWithState(card) {
    this.router.navigateByUrl('detail', { state: { card } });
  }




  public loadPictures(date) {
    this.functionService.getPicture(date).subscribe(data => {
      this.list.push(data);
    }, err => {
      console.log(err);
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {
  list = [];
  numPictures = 0
  year:string;
  month:string;
  day:string;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  getDate() {
    var d = new Date();
    this.month = (d.getMonth() + 1).toString(),
      this.day = (d.getDate()-1).toString()
      this.year = d.getFullYear().toString()
    if (this.month.length < 2)
      this.month = '0' + this.month;
    if (this.day.length < 2)
      this.day = '0' + this.day;
      console.log(this.day)

  }
  async getPicture() {
    this.numPictures++
    let promise = new Promise(async () => {
      let apiURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+this.year+"-"+this.month+"-"+this.day;
      console.log(apiURL)
      await this.http.get(apiURL).toPromise().then(
        res => {
          let numberday=parseInt(this.day)-1
          this.day=numberday.toString()
          this.list.push(res)
          console.log(this.numPictures)

          console.log(res)

          if (this.numPictures < 6) {
            this.getPicture()

          }

        },
        msg => {
          // Error
          console.log(msg)
        }
      );
    });
    console.log(this.list)
    return this.list

  }
}

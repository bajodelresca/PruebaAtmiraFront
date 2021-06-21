import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  list=[];
  numPictures=0
  constructor(private http:HttpClient) { }

  async getPicture(){
    this.numPictures++
    let promise = new Promise(async () => {
      let apiURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-14`;
      await this.http.get(apiURL).toPromise().then(
          res => {
            this.list.push(res)
            console.log(this.numPictures)
            
            console.log(res)
            
            if(this.numPictures<6){
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

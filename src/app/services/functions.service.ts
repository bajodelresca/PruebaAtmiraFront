import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

  getPicture(date) {
    let apiURL = "https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=" + date;
    console.log(apiURL)
    return this.http.get<card>(apiURL);
  }
}

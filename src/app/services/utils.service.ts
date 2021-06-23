import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getDate(d: Date) {
    var month = (d.getMonth() + 1).toString(),
      day = d.getDate().toString(),
      year = d.getFullYear().toString()
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    console.log(day)
    return year + "-" + month + "-" + day;
  }

}

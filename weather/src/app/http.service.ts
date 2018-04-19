import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  getSanJose(){
  	let sanjose = this._http.get("http://api.openweathermap.org/data/2.5/weather?q=San Jose,us" + "&" + "units=imperial" + '&APPID=c515802fb73b3abbca0b2edfa638cbcc');
  	return sanjose;
  }
  getSeattle(){
  	let seattle = this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,us" + "&" + "units=imperial" + '&APPID=c515802fb73b3abbca0b2edfa638cbcc');
  	return seattle;
  }
}

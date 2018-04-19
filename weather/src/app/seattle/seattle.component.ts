import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	main = {};
	status = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.getSeattle();
  }

  getSeattle(){
  	let observable = this._httpService.getSeattle();
  	observable.subscribe( data => {
  		console.log("Got Seattle weather!", data['main']);
  		this.main = data['main'];
  		this.status = data['weather'][0];
  	})
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	main = {};
	status = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	this.getSanJose();
  }

  getSanJose(){
  	let observable = this._httpService.getSanJose();
  	observable.subscribe( data => {
  		console.log("Got San Jose weather!", data['main']);
  		this.main = data['main'];
  		this.status = data['weather'][0];
  	})
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Roof } from 'src/app/_models/roof';

@Component({
  selector: 'app-vermieten',
  templateUrl: './vermieten.component.html',
  styleUrls: ['./vermieten.component.scss']
})
export class VermietenComponent implements OnInit {

  clickCounter: number = 0;
  name: String = '';
  roofs: Object;
  roof: Roof = {
    orientation: 1,
    roofTilt: 5,
    roofType: 70
  };


  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this._http.getRoofs().subscribe(data => {
      this.roofs = data;
      console.log(this.roofs);
    });
  }

  countClick() {
    this.roof.orientation = 1;
    this.roof.roofTilt = this.clickCounter;
    this.roof.roofType = 50
    this._http.saveRoof(this.roof).subscribe(data => {
      console.log(data);
    })
    this.clickCounter += 1;
  }

  setClasses() {
    let myClass = {
      active: this.clickCounter > 4,
      nonactive: this.clickCounter <= 4,
    }
    return myClass;
  }
}

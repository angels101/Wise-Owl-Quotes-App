import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this._http.myMethod();gi
  }

}

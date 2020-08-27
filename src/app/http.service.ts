import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  // tslint:disable-next-line: typedef
  myMethod() {
    return console.log('hey, what is up Wise Owl! ');
  }
}

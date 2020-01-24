import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }

  // createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
  //   throw new Error("Method not implemented.");
  // }

  createDb() {
    let articleDetails = [
      { id: 101, title: 'Angular by Krishna', category: 'Angular' },
      { id: 102, title: 'Core Java by Vishnu', category: 'Java' },
      { id: 103, title: 'NgRx by Rama', category: 'Angular' }
    ];
    return { articles: articleDetails };
  }

}

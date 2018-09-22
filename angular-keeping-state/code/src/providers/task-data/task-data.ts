import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TaskDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TaskDataProvider {

  tasks;

  constructor(public http: Http) {    
    this.tasks = http.get("/get-tasks");
  }

}

import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { TaskDataProvider } from '../../providers/task-data/task-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private td: TaskDataProvider) {

  }

  markTaskComplete(task){
    task.complete = true;
  }

}







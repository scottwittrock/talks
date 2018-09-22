import { combineReducers } from '@ngrx/store';

import * as fromTasks from './tasks';
import * as fromProjects from './projects';
import * as fromUser from './user';

export interface State {
  tasks: fromTasks.State;
  projects: fromProjects.State;
  user: fromUser.State;
}

const reducers = {
  tasks: fromTasks.reducer,
  projects: fromProjects.reducer,
  user: fromUser.reducer,
};

export function reducer(state: any, action: any) {
    combineReducers(reducers)
}
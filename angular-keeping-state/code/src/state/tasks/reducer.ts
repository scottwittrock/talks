import { Task } from './model';
import * as book from './actions';
import * as collection from '../actions/collection';


export interface State {
  ids: string[];
  tasks: { [id: string]: Task };
  selectedTaskId: string | null;
};

export const initialState: State = {
  ids: [],
  tasks: {},
  selectedTaskId: null,
};

export function reducer(state = initialState, action: book.Actions | collection.Actions): State {
  switch (action.type) {
    case book.SEARCH_COMPLETE:
    case collection.LOAD_SUCCESS: {

    }

    case book.LOAD: {
  
    }

    case book.SELECT: {

    }

    default: {
      return state;
    }
  }
}
import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  projects: {},
};

const getProjectReducer = (state, action) => {
  const { payload } = action;
  return ({
    ...state,
    projects: {
      ...state.projects,
      [payload.id]: payload,
    },
  });
};

export default handleActions({
  [C.GET_PROJECT_SUCCESS]: getProjectReducer,
}, initialState);

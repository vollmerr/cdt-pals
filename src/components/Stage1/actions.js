import { createAction } from 'redux-actions';

import * as C from './constants';

export const getProject = createAction(C.GET_PROJECT);
export const getProjectSuccess = createAction(C.GET_PROJECT_SUCCESS);

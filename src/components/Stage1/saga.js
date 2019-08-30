import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { withAsync, api } from 'state-template';

import * as actions from './actions';
import * as C from './constants';

export function* getProjectSaga() {
  const url = process.env.REACT_APP_API_URL;
  const data = yield call(api.request, url);
  yield put(actions.getProjectSuccess(data));
}

export default function* stage1Saga() {
  yield all([
    takeLeading(C.GET_PROJECT, withAsync(getProjectSaga)),
  ]);
}

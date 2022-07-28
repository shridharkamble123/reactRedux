import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import * as types from './actionTypes'
import { getReceipe } from './api';

export function* onLoadReceipeAsync({payload: query}){
   try {
    const response=yield call(getReceipe,query);
    yield put({type:types.FETCH_RECIPE_SUCCESS,payload:response.data});

   } catch (error) {
    yield put({type:types.FETCH_RECIPE_FAIL,payload:error});
   }
}

export function* onLoadReceipe(){
    yield takeLatest(types.FETCH_RECIPE_START, onLoadReceipeAsync)
}

const recipeSaga=[fork(onLoadReceipe)];

export default function* rootSaga(){
    yield all([...recipeSaga]);
}
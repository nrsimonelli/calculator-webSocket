import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";


function* calculatorSaga() {
  yield takeLatest("FETCH_CALCULATOR", getCalculation);
  yield takeLatest("ADD_CALCULATOR", addCalculation);
}

function* addCalculation(action) {
  try {
    const response = yield axios.post("/api/calculator", action.payload);
    yield put({ type: "FETCH_CALCULATOR", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getCalculation(action) {
  try {
    const response = yield axios.get('api/calculator');
    yield put ({ type: 'SET_CALCULATOR', payload: response.data });

  } catch (error){
    console.log('error with get calculator saga', error)
  }
}

export default calculatorSaga;
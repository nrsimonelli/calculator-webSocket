import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";


function* calculatorSaga() {
  yield takeLatest("FETCH_CALCULATOR", getCalculation)
}

function* getCalculation(action) {
  try {
    const response = yield axios.get('api/calc');
    yield put ({ type: 'SET_CALCULATOR', payload: response.data });

  } catch (error){
    console.log('error with get calculator saga', error)
  }
}

export default calculatorSaga;
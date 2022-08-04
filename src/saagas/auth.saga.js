import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupApi } from '../Comman/api/auth.api';
import *as ActionTypes from '../redux/action/ActionTypes'
import { ReSetAlert, SetAlert } from '../redux/action/Alert.action';
import { EmailVerify } from '../redux/action/auth.action';

function* fetchUser(action) { 
   try {
      const user = yield call(signupApi, action.payload);
      yield put(EmailVerify(user));
      console.log(user);
      yield put(SetAlert({text : user.payload,color : 'success'}))
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put(SetAlert({text:e.payload,color:"error"}))


   }
}
function* watchauth() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, fetchUser);
}
export function* authsaga (){
   yield all([
      watchauth()
   ])
};
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { googleLoginApi, loginApi, logoutApi, signupApi } from '../Comman/api/auth.api';
import { history } from '../history';
import *as ActionTypes from '../redux/action/ActionTypes'
import { SetAlert } from '../redux/action/Alert.action';
import { EmailVerify, LoggedOutUser, LoggedUser, signupAction } from '../redux/action/auth.action';

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

function* loginUser(action){
   console.log(action.payload);
try{
   const user = yield call(loginApi, action.payload);
   yield put(SetAlert({text : "login Successfully" , color  : 'success'}))
   history.push("/")
   yield put(LoggedUser(user));
  
   console.log(user);
}catch(e){
  
      yield put(SetAlert({text:e.payload,color:'error'}))
  console.log(e);
}



}

function* logoutUsers(){
   try{
   const user = yield call(logoutApi);
   yield put(SetAlert({text : user.payload , color  : 'success'}))
   yield put(LoggedOutUser());
   history.push("/More")
   }catch(e){
      yield put(SetAlert({text:e.payload,color:'error'}))
   }
}

function*googleLoginUser(){
   try{
      const user = yield call(googleLoginApi());
      yield put(SetAlert({text : user.payload , color  : 'success'}))
      yield put(LoggedOutUser());
      history.push("/")
   }catch(e){

   }
}
function* watchauth() {
   yield takeEvery(ActionTypes.AUTH_SIGN, fetchUser);
}

function* watchlogin(){
   yield takeEvery(ActionTypes.AUTH_LOGIN,loginUser );
}
function*watchlogout(){
   yield takeEvery(ActionTypes.LogOutUser,logoutUsers );
}
function* watchgooglelogin(){
   yield takeEvery(ActionTypes.GOOGLE_USER,googleLoginUser);
}





export function* authsaga (){
   yield all([
      watchauth(),
      watchlogin(),
      watchlogout(),
      watchgooglelogin()
   ])
};

import *as ActionTypes from './ActionTypes'

export const loginAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_LOGIN, payload:data})
}
export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAIL_VARIFICATION, payload : user})
} 
export const signupAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_SIGN, payload:data})
}

export const LoggedUser = (data)=>(dispatch)=>{
    dispatch({type : ActionTypes.LOADED_FORM, payload:data})
}
//LOG  OUT
export const LogoutAction = () => (dispatch)=>{
    dispatch({type : ActionTypes.LogOutUser})
}

export const LoggedOutUser =() => (dispatch)=>{
    dispatch({type:ActionTypes.LoggedOutUser})
}

//google log In

export const googleLogin =() => (dispatch)=>{
    dispatch({type:ActionTypes.GOOGLE_USER})
}
//Forget Password

export const forgetPassword =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.FORGET_PASSWORD ,payload:data})
}
import *as ActionTypes from './ActionTypes'

export const loginAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_LOGIN, payload:data})
}
export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAIL_VARIFICATION, payload : user})
} 
export const signup =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_SIGN, payload:data})
}
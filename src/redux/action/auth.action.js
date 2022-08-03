import *as ActionTypes from './ActionTypes'

export const signAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_LOGIN, payload:data})
}
export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAIL_VARIFICATION, payload : user})
} 
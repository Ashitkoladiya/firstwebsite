import *as ActionTypes from './ActionTypes'

export const signAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.SIGN_USER, payload:data})
}
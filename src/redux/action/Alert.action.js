import * as ActionType from '../action/ActionTypes'



export const SetAlert =(data)=>(dispatch)=>{
    dispatch({type : ActionType.SET_ALERT, payload : data})
}

export const ReSetAlert =(data)=>(dispatch)=>{
    dispatch({type : ActionType.RESET_ALERT})
}

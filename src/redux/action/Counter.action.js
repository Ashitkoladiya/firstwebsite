import * as ActionTypes from './ActionTypes'

export const IcData =()=>(dispatch) =>{
    dispatch({type :ActionTypes.INCRIMENT_Data})
}
export const DEData =()=>(dispatch)=>{
    dispatch({type : ActionTypes.DECRIMENT_Data})
}  
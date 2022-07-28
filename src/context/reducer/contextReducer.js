import * as ActionTypes from '../ActionTypes'


export const Theme_reducer = (state , action)=>{
    console.log(state,action);
    switch(action.type){
        case ActionTypes.Toogle_theme : return{
            ...state,
            theme : action.payload
        }
        default :
          return state
    }
}

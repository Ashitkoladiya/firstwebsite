import * as ActionType from '../action/ActionTypes'

const newvalue = {
    isLoading : false,
    medicine : [],
    error : ''
    
}


export const reducer_medicines = (state=newvalue, action )=>{

console.log(action.type , action.payload , state);
    switch(action.type){

        case ActionType
        .GET_MEDICINES :
        return {
            ...state,
            isLoading : false,
            medicine : action.payload,
            error : ''   
        }

        default : 
        return state;
    }
}
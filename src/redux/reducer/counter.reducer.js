
import * as ActionType from '../action/ActionTypes'

const newvalue = {
    counter : 0
}
export const counterReducer =(state=newvalue ,action) =>{
    switch (action.type){
        
        case  ActionType.INCRIMENT_Data: 
            return {
                ...state,
                counter:state.counter + 1
            }
        case  ActionType.DECRIMENT_Data:  
            return{
                ...state,
               counter: state.counter - 1
            } 
        default : 
            return state
            
    }
    
}

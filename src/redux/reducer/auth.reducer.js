
import * as ActionType from '../action/ActionTypes'

const newvalue = {
    isLoading : false,
    user : null,
    error:''
}
export const authReducer =(state=newvalue ,action) =>{
    console.log(action.payload);
    switch (action.type){
        
        case  ActionType.LOADED_FORM: 
            return {
                ...state,
               isLoading:false,
               user:action.payload,
               error:''
            }
        case ActionType.LoggedOutUser:
            return{
                ...state,
                isLoading:false,
                user:null,
                error:''
            }
        
        default : 
            return state
            
    }
    
}

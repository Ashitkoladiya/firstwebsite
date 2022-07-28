import { baseUrl } from '../../baseurl/baseUrl';
import * as ActionTypes from './ActionTypes'

export const get_medicines =()=>(dispatch)=>{
    
   try{

    dispatch(loadingMedicines());
    setTimeout(function(){
      return fetch(baseUrl + 'medicines')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())
      .then(addmedicines => dispatch(({ type: ActionTypes.GET_MEDICINES, payload: addmedicines })))
      .catch((error) =>dispatch(errorMedicines(error.message))
      )
    
    },2000)
    
   }
   catch(error){
    dispatch(errorMedicines(error.message)) 
     
   }
}

export const loadingMedicines=() =>(dispatch)=>{
  dispatch({type : ActionTypes.LOADING_MEDICINES})
}

export const errorMedicines = (error) => (dispatch) => {
  dispatch({type : ActionTypes.ERROR_MEDICINES,payload : error})
  
}
import React from 'react';
import { createContext, useReducer } from 'react'
import { Theme_reducer } from './reducer/contextReducer';
import * as ActionTypes from './ActionTypes'


export const ContextTheme = createContext();

const initalval ={
    theme : "light",

}


export const Toogle_theme =({children})=>{
    const [state, dispatch] = useReducer(Theme_reducer, initalval);

   const toogle_theme = (theme)=>{
        const newThem = theme=== "light"?"dark":"#fff"

    dispatch(({ type: ActionTypes.Toogle_theme, payload: newThem}))
    }
    
    return(
        
            <ContextTheme.Provider
            value={
                {
                    ...state,
                    toogle_theme
                }
            }
            >{children}
            </ContextTheme.Provider>
       
    )
     
    
}

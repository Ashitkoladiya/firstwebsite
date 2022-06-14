import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsLogin } from '../Componets/Index';
import { More }   from '../Componets/More'

function PrivateRoute({component : Component , ...rest}) {
    return (
        <Route {...rest} render ={props => (
            IsLogin() ?
            <Component  {...props}/>
            :
            <Redirect to =  {"/More"} />

        
            
        )}

        />
    );
}

export default PrivateRoute;
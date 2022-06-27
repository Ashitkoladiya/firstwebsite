import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsLogin } from '../Componets/Index';

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
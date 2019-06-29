import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const key = localStorage.getItem('loginKey');
    console.log(key)
    return (
        <Route {...rest} render={props =>
            (key)
            ?
                (<Component {...props} />)
            :
                (<Redirect push={true} to={"/login"} />)
        }/>
    )
  };

  export default PrivateRoute;
import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const key = localStorage.getItem('loginKey');
    
    if(key){
        return <props.component {...props} />
    }
    else {
        return <Redirect push={true} to={"/login"} />
    }

  };

  export default PrivateRoute;
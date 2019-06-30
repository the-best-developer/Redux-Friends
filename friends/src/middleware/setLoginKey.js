import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/Friends.js';

const setLoginKey = store => next => action => {
    //Set key on success, clear key on failure
    (action.type === LOGIN_SUCCESS) && localStorage.setItem('loginKey', action.payload);
    (action.type === LOGIN_FAIL) && localStorage.setItem('loginKey', "");
    next(action);
  };

  export default setLoginKey;
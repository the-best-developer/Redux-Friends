
import {LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_FAIL,
        FRIENDS_FETCHING, FRIENDS_SUCCESS, FRIENDS_FAIL} from '../actions/Friends.js';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
    loginError: ""
  };

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case LOGIN_SUBMIT:
        return Object.assign({}, state, {loggingIn: true});

    case LOGIN_SUCCESS:
        localStorage.setItem('loginKey', action.payload);
        return Object.assign({}, state, {loggingIn: false});

    case LOGIN_FAIL:
        //Logout when login fails
        localStorage.setItem('loginKey', "");
        return Object.assign({}, state, {loginError: action.payload.response.data, loggingIn: false});
    
    case FRIENDS_FETCHING:
        return Object.assign({}, state, {fetchingFriends: true});
    
    case FRIENDS_SUCCESS:
        return Object.assign({}, state, {friends: [...action.payload]});
    
    case FRIENDS_FAIL:
        return Object.assign({}, state, {error: action.payload});
      
    default:
      return state;
  }
};

export default friendsReducer;
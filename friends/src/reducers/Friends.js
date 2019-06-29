
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
    loginError: "",
    loggedIn: false
  };

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case LOGIN_SUBMIT:
        return Object.assign({}, state, {loggingIn: true});

    case LOGIN_SUCCESS:
        localStorage.setItem('loginKey', action.payload);
        return Object.assign({}, state, {loggingIn: false, loggedIn: true});

    case LOGIN_FAIL:
        //Logout when login fails
        const errorReply = (typeof action.payload.response != "undefined") ? (action.payload.response.data.error) : (action.payload.message);
        localStorage.setItem('loginKey', "");
        return Object.assign({}, state, {loginError: errorReply, loggingIn: false});
    
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
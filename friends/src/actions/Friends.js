import AuthAxios from '../components/Authentication/AuthAxios';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FRIENDS_FETCHING = 'FRIENDS_FETCHING';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAIL = 'FRIENDS_FAIL';

export const submitLogin = (user, pass) => dispatch => {
    dispatch({type: LOGIN_SUBMIT, payload: true});
    return AuthAxios().post('http://localhost:5000/api/login', (
            {
                username: user,
                password: pass
            }
        ))
        .then(({data}) => {
            dispatch({type: LOGIN_SUCCESS, payload: data.payload});
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err});
        })
    
  };

const getFriends = () => dispatch => {
    dispatch({type: FRIENDS_FETCHING, payload: true});

    return AuthAxios().get('http://localhost:5000/api/friends')
    .then(({data}) => {
        dispatch({type: FRIENDS_SUCCESS, payload: data});
    })
    .catch(err => {
        dispatch({type: FRIENDS_FAIL, payload: err});
    });
  };

  export default getFriends;

const AuthCheck = props => {
    const key = localStorage.getItem('loginKey');

    if(
        (key !== "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ")
        &&
        (props.location.pathname !== "/login")
    )
    {
        props.history.push(`/login`)
    }
    return null;
  };

  export default AuthCheck;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeUnathenticatedPostRequest from '../utils/serverHelper.js'
import {useCookies} from 'react-cookie'
import './login.css'; 

function Login() {

    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['token'])
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        const body = {userName: userName, password: password}
        const response = await makeUnathenticatedPostRequest('auth/login',  body);

        if(response && !response.err){
            alert("Logged in successfully")
            setCookie('token',response._id, {path : '/'})
            navigate('/home')
        }
        else{
            alert("Couldn't login")
        }
    }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form>
          <input type="text" placeholder="Enter username"  onChange={(e) => (setUserName(e.target.value))}/>
          <input type="text" placeholder="Enter password" onChange={(e) => (setPassword(e.target.value))}/>
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            login();
          }}>Login</button>
        </form>
        <p onClick={() => {
            navigate('/signup')
        }}>Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default Login;
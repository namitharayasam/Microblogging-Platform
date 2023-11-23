import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeUnathenticatedPostRequest from '../utils/serverHelper.js';
import './login.css'; 

function Signup() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const signup = async () => {
        const body = {userName: userName, email: email, password: password, age:age};
        const response = await makeUnathenticatedPostRequest('auth/register', body);

        if (response && !response.err) {
            alert("Registration successful");
            navigate('/home');   
        }
        else{
            alert("Registration failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />
                    <button type="submit" onClick={(e) => { e.preventDefault(); signup(); }}>Sign Up</button>
                </form>
                <p onClick={() => { navigate('/login'); }}>Already have an account? Log in</p>
            </div>
        </div>
    );
}

export default Signup;

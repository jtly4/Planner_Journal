import { useState } from 'react';
import { Link } from "react-router-dom";
  
function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted!")
    }
  
    return (
        <form onSubmit={handleSubmit} action="/login_form" method="POST" className='login-form'>
        <input 
            className='login-input'
            type="email" 
            name="email" 
            placeholder = "Email"
            required
            value={inputs.email || ""} 
            onChange={handleChange}
        /><br/>
        <input 
            className='login-input'
            type="password" 
            name="password" 
            placeholder = "Password"
            minLength={8}
            required
            value={inputs.password || ""} 
            onChange={handleChange}
        /><br />
            <input type="submit" id="login-btn" />
            <div id='login_noAccount'>  
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </div>
        </form>
    )
  }
  
  
const Login = () => {
    return(
        <>
            <h2 className="page-title">Login</h2>
            <MyForm/>
            {/* <span id='login_noAccount'>  
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </span> */}
        </>
    )
  }

  export default Login;
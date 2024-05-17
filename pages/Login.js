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
        // alert(inputs);
        alert("Submitted!")
    }
  
    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit} action="/help_form" method="POST">
        {/* <label>Enter your name: */}
        <input 
            className='loginInput'
            type="email" 
            name="email" 
            placeholder = "Email"
            required
            value={inputs.email || ""} 
            onChange={handleChange}
        /><br/>
        <input 
            className='loginInput'
            type="password" 
            name="password" 
            placeholder = "Password"
            minLength={8}
            required
            value={inputs.password || ""} 
            onChange={handleChange}
        /><br />
        {/* </label> */}
            <input type="submit" />
        </form>
        /*{ </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder ="Email Address" 
                class ="login_input" 
                required
                value={email}
                // onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" />
        </form> }*/
    )
  }
  
  
const Login = () => {
    return(
        <>
            <h2>Login</h2>
            <MyForm/>
            <span id='login_noAccount'>  
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </span>
        </>
    )
  }
  export default Login;
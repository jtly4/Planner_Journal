import { useState } from 'react';
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
  
function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
  
    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
        {/* <label>Enter your name: */}
        <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
        />
        {/* </label> */}
        {/* <label>Enter your age: */}
            <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
        />
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
            <span>  
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </span>
        </>
    )
  }
  export default Login;
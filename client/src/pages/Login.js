import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"

  
function MyForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setErrror] = useState(null)
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        alert("Submitted!")
      }
  
    return (
        // <form onSubmit={handleSubmit} > //action="/login_form" method="POST" className='login-form'>
        <form className="login" onSubmit={handleSubmit} class='login-form'>
        <input 
            className='login-input'
            type="email" 
            name="email" 
            placeholder = "Email"
            required
            value={email} 
            onChange = {(e) => setEmail(e.target.value)}
        /><br/>
        <input 
            className='login-input'
            type="password" 
            name="password" 
            placeholder = "Password"
            minLength={8}
            required 
            value={password} 
            onChange = {(e) => setPassword(e.target.value)}
        /><br />
        <input type="submit" id="login-btn" />
            <div id='login_noAccount'>  
                <p>Don't have an account?</p>
                <Link to="/SignUp">Sign Up</Link>
            </div>
        {/* <button disabled={isLoading}>Log in</button> */}
        {error && <div className="error">{error}</div>}
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
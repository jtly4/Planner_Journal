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
        <form onSubmit={handleSubmit} action="/account_creation" method="POST">
            <input 
                className='signUp_input'
                type="email" 
                name="email" 
                placeholder = "Email"
                required
                value={inputs.email || ""} 
                onChange={handleChange}
            /><br/>
            <input 
                className='signUp_input'
                type="password" 
                name="password" 
                placeholder = "Password"
                minLength={8}
                required
                value={inputs.password || ""} 
                onChange={handleChange}
            /><br />
            <input 
                className='signUp_input'
                type="password" 
                name="passwordConfirm" 
                placeholder = "Confirm Password"
                minLength={8}
                required
                value={inputs.passwordConfirm || ""} 
                onChange={handleChange}
            /><br />
            <label className ="signUp_label">Sync with Google Calendar?
                <input 
                    className ="signUp_input"
                    type ="checkbox" 
                    id ="sync" 
                /><br />
            </label>
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
function SignUp() {
    return(
        <>
            <h2>Sign Up</h2>
            <div className='signUp_box'>
                <MyForm/>
            </div>
        </>
    )
};

export default SignUp;
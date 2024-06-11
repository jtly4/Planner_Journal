import { useState, useEffect } from 'react';
// import axios from "axios"
import { useSignup } from "../hooks/useSignup"

  
function MyForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    // const [error, setErrror] = useState(null)
    const {signup, error, isLoading} = useSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)

        // console.log(email, password, passwordConfirm)
        // const newUser = {
        //     email, password, passwordConfirm
        // }
        // const response = await fetch('http://localhost:5000/api/users', {
        //     method: 'POST',
        //     body: JSON.stringify(newUser),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const json = await response.json()
        // if(!response.ok) {
        //     setErrror(json.error)
        // }
        // if(response.ook) {
        //     setEmail('')
        //     setPassword('')
        //     setPasswordConfirm('')
        //     setErrror(null)
        //     console.log('New user added', json)
        // }
        // axios.post("/api/users", newUser)
        // axios.post("http://localhost:5000/users", newUser)
    }
  
    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            {/* action="/account_creation" method="POST" */}
        {/* // <form> */}
            <input 
                className='signUp_input'
                type="email" 
                name="email" 
                placeholder = "Email"
                required
                value={email} 
                onChange = {(e) => setEmail(e.target.value)}
            /><br/>
            <input 
                className='signUp_input'
                type="password" 
                name="password" 
                placeholder = "Password"
                minLength={8}
                required
                value={password} 
                onChange = {(e) => setPassword(e.target.value)}
            /><br />
            <input 
                className='signUp_input'
                type="password" 
                name="passwordConfirm" 
                placeholder = "Confirm Password"
                minLength={8}
                required
                value={passwordConfirm} 
                // onChange={handleChange}
                onChange = {(e) => setPasswordConfirm(e.target.value)}
            /><br />
            <input type="submit" id="signup-btn" onClick={handleSubmit}/>
            {error && <div className='error'>{error}</div>}
            {/* <button type="button" id="signup-btn" className = "btn btn-lg btn-info">Sign Up</button> */}
        </form>
    )
  }
  
//   const SignUp = () => {
function SignUp() {
    // const [users, setUsers] = useState([{
    //   email:'',
    //   password:''
    // }])

    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     const response = await fetch('http://localhost:5000/api/users')
    //     const json = await response.json()
    //     if(response.ok) {
    //       setUsers(json)
    //     }
    //   }
    //   fetchUsers()
    // }, [])

  return(
    <>
      {/* <div className="users">
        {users && users.map((user) =>
          <p key = {user.password}>{user.email}</p>
        )}
      </div> */}
            <h2 className="page-title">Sign Up</h2>
            <div className='signUp_box'>
                <MyForm/>
            </div>
        </>
    )
};

export default SignUp;
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const FeatureCard = (props) => {
  return(
    <div className='feature_container'>
      <div className='feature-card'> 
        <h2>{props.title}</h2>
        <img src={props.imgTitle} alt = "icon"/>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div className="features">
      <FeatureCard title="Create Events" imgTitle="/images/calendar_icon.png"/>
      <FeatureCard title="Add Memories" imgTitle="/images/journal_icon.png"/>
      <FeatureCard title="Add Expenses" imgTitle="/images/dollar_icon.png"/>
    </div>
  )
};

const HomeButtons = () => {
  return (
    <div className="home-buttons">
      <button type="button" id="home-login-btn"><Link to="/Login">Login</Link></button>   
      <button type="button" id="home-signup-btn"><Link to="/SignUp">Sign Up</Link></button> 
    </div>
  )
}




  const Home = () => {
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
      <Features/>
      <HomeButtons />
    </>
  )
}
export default Home;
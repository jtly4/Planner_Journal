import { Link } from "react-router-dom";


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
  return(
    <>
      <Features/>
      <HomeButtons />
    </>
  )
}
export default Home;
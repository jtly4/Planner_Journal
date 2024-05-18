
const FeatureCard = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <img src={props.imgTitle} alt = "icon"/>
    </>
  )
}





const Features = () => {
  const featureStyle = {
    height: "auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "1.2rem",
    top: "0"
  };

  const cardStyle = {
    width: "fill"
  };

  return (
    <>
    <div /*className='feature_container'*/ style={featureStyle}>
      <div /*className='feature_card'*/ style={cardStyle}> 
        <FeatureCard title="Create Events" imgTitle="/images/calendar_icon.png"/>
        <FeatureCard title="Add Memories" imgTitle="/images/journal_icon.png"/>
        <FeatureCard title="Add Expenses" imgTitle="/images/dollar_icon.png"/>
      </div>
    </div>
    </>
  )
};

// function Home() {
  const Home = () => {
  return(
    <Features/>
  )
}
export default Home;

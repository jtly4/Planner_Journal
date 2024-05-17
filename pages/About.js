
const FeatureCardUp = (props) => {
    return(
      <>
        <p>{props.text}</p>
        <img src={props.imgTitle} alt = "icon"/> <br />
      </>
    )
  }

  const FeatureCardDown = (props) => {
    return(
      <>
        <img src={props.imgTitle} alt = "icon"/>
        <p>{props.text}</p> <br />
      </>
    )
  }
  
  const Features = () => {
    return (
      <>
        <FeatureCardUp text="Add events to your calendar!" imgTitle="/images/calendar_icon.png"/>
        <FeatureCardDown text="Plan your events by adding logistics!" imgTitle="/images/todo_icon.png"/>
        <FeatureCardUp text="Reflect on how the event went after it is finished!" imgTitle="/images/journal_icon.png"/>
        <FeatureCardDown text="Take note of any money you spent for / at the event!" imgTitle="/images/dollar_icon.png"/>
      </>
    )
  };

function About() {
    return (
        <>
            <h2>About Us</h2>
            <h2>Our Mission Statement</h2>
            <p>What we stand for and what we set out to do. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae possimus explicabo. Blanditiis temporibus, quisquam ut unde, quidem culpa nam fuga neque voluptate, expedita dolor eveniet iure adipisci. Possimus, fugit?</p><br/>
            <Features/>
        </>
    )
};

export default About;
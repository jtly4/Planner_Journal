
const FeatureCardUp = (props) => {
    return(
      <div className Name="feature-card-up">
        <h4>{props.title}</h4>
        <div className Name="feature-cards">
            <p>{props.text}</p>
            <img src={props.imgTitle} alt = "icon"/> <br />
        </div>
      </div>
    )
  }

  const FeatureCardDown = (props) => {
    return(
      <div className ="feature-card-down">
        <h4>{props.title}</h4>
        <div className ="feature-cards">
            <img src={props.imgTitle} alt = "icon"/>
            <p>{props.text}</p> <br />
        </div>
      </div>
    )
  }
  
  const Features = () => {
    return (
      <div className Name="features">
        <FeatureCardUp title="Add Events" text="Add events to your calendar!" imgTitle="/images/calendar_icon.png"/>
        <FeatureCardDown title="Plan Events" text="Plan your events by adding logistics!" imgTitle="/images/todo_icon.png"/>
        <FeatureCardUp title="Reflect" text="Reflect on how the event went after it is finished!" imgTitle="/images/journal_icon.png"/>
        <FeatureCardDown title="Note Expenses" text="Take note of any money you spent for / at the event!" imgTitle="/images/dollar_icon.png"/>
      </div>
    )
  };

function About() {
    return (
        <div className Name="about">
            <h2 className Name="page-title"><u>About Us</u></h2>
            <h2>Our Mission Statement</h2>
            <p>     What we stand for and what we set out to do. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae possimus explicabo. Blanditiis temporibus, quisquam ut unde, quidem culpa nam fuga neque voluptate, expedita dolor eveniet iure adipisci. Possimus, fugit?</p><br/>
            <h2>Key Features</h2>
            <Features/>
        </div>
    )
};

export default About;
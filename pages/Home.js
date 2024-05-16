// const Home = () => {
//     return <h1>Home</h1>;
//   };
  
function Home() {
  const Features = () => {
    const FeatureCard = (props) => {
      return(
        <>
          <h2>{props.title}</h2>
          <img src={props.imgTitle}/>
        </>
      )
    }
  }
}
export default Home;
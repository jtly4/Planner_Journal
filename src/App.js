import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Calendar from "./pages/Calendar";
import CreateEvent from "./pages/CreateEvent";
import ViewEvent from "./pages/ViewEvent";
import CloseEvent from "./pages/CloseEvent";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Router>
    //   <div className='App'>
    //     <Navbar />
    //     <div className='content'>
    //       <Switch>

    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    <>
      <nav>
        <nav className = "navbar">
          <div className = "navbar_container">
            <h1>Planner</h1>
            <ul class="navbar_menu">
              <li class="navbar_item">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar_item">
                <Link to="/FAQ">FAQs</Link>
              </li>
              <li className = "navbar_item">
                <Link to="/Calendar">Calendar</Link>
              </li>
              <li className = "navbar_item">
                <Link to="/Login">Login</Link>
              </li>
              <li className = "navbar_item">
                <Link to="/About">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/FAQ" element={<FAQ />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Help" element={<Help />}/>
          <Route path="/Calendar" element={<Calendar />}/>
          <Route path="/CreateEvent" element={<CreateEvent />}/>
          <Route path="/ViewEvent" element={<ViewEvent />}/>
          <Route path="/About" element={<CloseEvent />}/>
        </Routes>
      </>
  );
}

export default App;

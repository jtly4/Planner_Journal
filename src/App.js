import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
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
import ViewClosedEvent from './pages/ViewClosedEvent';


function App() {
  return (
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
          <Route path="/CloseEvent" element={<CloseEvent />}/>
          <Route path="/ViewClosedEvent" element={<ViewClosedEvent />}/>
        </Routes>
      </>
  );
}

export default App;

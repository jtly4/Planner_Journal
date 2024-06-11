import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes, Navigate } from 'react-router-dom';
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
import { useLogout } from './hooks/useLogout'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout() 
  }

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
                <Link to="/About">About Us</Link>
              </li>
              {!user && (
                <>
                  <li className = "navbar_item">
                    <Link to="/Login">Login</Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li className = "navbar_item">
                    <Link to="/Calendar">Calendar</Link>
                  </li>
                  <li className = "navbar_item">
                    <button onClick={handleLogout} id="logout-btn">Log Out</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/FAQ" element={<FAQ />}/>
          {/* <Route path="/SignUp" element={<SignUp />}/> */}
          <Route path="/SignUp" element={!user ? <SignUp /> : <Navigate to="/" />} />
          {/* <Route path="/Login" element={<Login />}/> */}
          <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/Help" element={<Help />}/>
          {/* <Route path="/Calendar" element={<Calendar />}/> */}
          <Route path="/Calendar" element={user ? <Calendar /> : <Navigate to="/" />} />
          <Route path="/CreateEvent" element={<CreateEvent />}/>
          <Route path="/ViewEvent" element={<ViewEvent />}/>
          <Route path="/CloseEvent" element={<CloseEvent />}/>
          <Route path="/ViewClosedEvent" element={<ViewClosedEvent />}/>
        </Routes>
      </>
  );
}

export default App;

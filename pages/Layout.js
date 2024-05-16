import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
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
                </ul>
            </div>
        </nav>

      <Outlet />
    </>
  )
};

export default Layout;
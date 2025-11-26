import react, { useContext } from 'react';
import './Navbar.css'
import logo2 from '../../assets/logo2.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FiMenu } from "react-icons/fi";

function Navbar() {
    const navigation = useNavigate();
    const { user, logout } = useContext(UserContext);
    return (<>
        <div className="nav-container">

            <div className='nav-logo'>
                <img className='logo' src={logo2} alt="Order-India Logo" />
            </div>

            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/browseMenu"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                    Browse Menu
                </NavLink>

                <NavLink
                    to="/restaurants/d"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                    Restaurants
                </NavLink>

                <NavLink
                    to="/orderingPage"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                    MyBasket
                </NavLink>
                <NavLink
                    to="/my-orders"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                    MyOrders
                </NavLink>
            </div>

               <div className='nav-login'>
                <div className="user-dropdown">
                    <FiMenu size={30}  className="mobi-menu-icon cursor-pointer" />
                    <div className="dropdown-content">
                        <div className="mobi-nav-links">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/browseMenu"
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                            >
                                Browse Menu
                            </NavLink>

                            <NavLink
                                to="/restaurants/d"
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                            >
                                Restaurants
                            </NavLink>

                            <NavLink
                                to="/orderingPage"
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                            >
                                MyBasket
                            </NavLink>
                        </div>
                    </div>
                </div>

            
            
                {user ? (
                    <div className="user-dropdown">
                        <span className="user-profile">{user.name.charAt(0)}</span>
                        <div className="dropdown-content">
                            <p>{user.name}</p>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <button className="login-btn" onClick={() => navigation("/login")}>
                        <span className="user-icon">👤</span>Login/Signup
                    </button>
                )}

            </div>

        </div>


    </>

    );
};



export default Navbar;
import react, { useContext } from 'react';
import './Navbar.css'
import logo2 from '../../assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
function Navbar() {
    const navigation = useNavigate();
    const { user,logout } = useContext(UserContext);;
    return (<>
        <div className="nav-container">

            <div className='nav-logo'>
                <img className='logo' src={logo2} alt="Order-India Logo" />
            </div>

            <div className="nav-links">
                <Link to="/" className='nav-item' >Home</Link>
                <Link to="/browseMenu" className='nav-item'>Browse Menu</Link>
                <Link className='nav-item'>Special Offers</Link>
                <Link to="/restaurants/all" className='nav-item' >Restaurants</Link>
                <Link to="/orderingPage" className='nav-item'>MyBasket</Link>
            </div>

            <div className='nav-login'>
                {user ? (
                    <div className="user-dropdown">
                        <span className="user-profile">{user.charAt(0)}</span>
                        <div className="dropdown-content">
                            <p>{user}</p>
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
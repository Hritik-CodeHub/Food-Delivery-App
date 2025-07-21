import react from 'react';
import './Navbar.css'
import logo2 from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
function Navbar() {

    return (

        <>

            <div className="nav-container">
                
                <div className='nav-logo'>
                    <img className='logo' src={logo2} alt="Order-India Logo" />
                </div>

                <div className="nav-links">
                    <Link to="/" className='nav-item' >Home</Link>
                    <Link className='nav-item'>Browse Menu</Link>
                    <Link className='nav-item'>Special Offers</Link>
                    <Link to="/restaurants" className='nav-item' >Restaurants</Link>
                    <Link className='nav-item'>Track Order</Link>
                </div>

                <div className='nav-login'>
                    <button className='login-btn'>
                        <span className='user-icon'>👤</span>
                        Login/Signup
                    </button>
                </div>

            </div>
            

        </>

    );
};



export default Navbar;

import react from 'react';
import './navBar.css'
import logo2 from '../assets/logo2.png';

function AppNavbar() {

    return (

        <>

            <div className="nav-container">
                
                <div className='nav-logo'>
                    <img className='logo' src={logo2} alt="Order-India Logo" />
                </div>

                <div className="nav-links">
                    <span className='nav-item'>Home</span>
                    <span className='nav-item'>Browse Menu</span>
                    <span className='nav-item'>Special Offers</span>
                    <span className='nav-item'>Restaurants</span>
                    <span className='nav-item'>Track Order</span>
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



export default AppNavbar;

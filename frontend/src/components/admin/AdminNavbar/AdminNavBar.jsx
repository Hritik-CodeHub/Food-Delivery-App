import React, {useContext} from 'react'
import logo2 from '../../../Assets/logo2.png';
import { UserContext } from '../../../context/UserContext';
import {  useNavigate } from 'react-router-dom';
const AdminNavBar = () => {
    const navigation = useNavigate();
    const { user, logout } = useContext(UserContext);
 return (<>
        <div className="nav-container">

            <div className='nav-logo'>
                <img className='logo' src={logo2} alt="Order-India Logo" />
            </div>

            <div className='nav-login'>
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
}

export default AdminNavBar
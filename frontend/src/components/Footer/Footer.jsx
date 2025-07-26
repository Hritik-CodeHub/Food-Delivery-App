import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaSnapchatGhost } from 'react-icons/fa';

const Footer = () => {
  return (<>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className='footer-brand-img'>
          <img src='/src/Assets/logo.png' style={{ width: '240px', height: '50px' }}/>
          </div>
          <div className="app-buttons">
            <img src="/src/Assets/W.png" alt="App Store" />
          </div>
          <p>For better experience, download the our app now.</p>
        </div>

        <div className="footer-subscribe">
          <h4>Get Exclusive Deals in your Inbox</h4>
          <form>
            <input type="email" placeholder="youremail@gmail.com" />
            <button type="submit">Subscribe</button>
          </form>
          <small>We won’t spam, read our email policy</small>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaSnapchatGhost />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h5>Legal Pages</h5>
            <ul>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Modern Slavery Statement</a></li>
            </ul>
          </div>

          <div>
            <h5>Important Links</h5>
            <ul>
              <li><a href="#">Get help</a></li>
              <li><a href="#">Add your restaurant</a></li>
              <li><a href="#">Sign up to deliver</a></li>
              <li><a href="#">Create a business account</a></li>
            </ul>
          </div>
        </div>
      </div>

     
    </footer>
     <div className="footer-bottom">
     <p>Order.India © Copyright 2025. All rights reserved.</p>
     <div className="footer-bottom-links">
       <a href="#">Privacy Policy</a>
       <a href="#">Terms</a>
       <a href="#">Pricing</a>
       <a href="#">Do not sell or share my personal information</a>
     </div>
   </div></>
  );
};

export default Footer;

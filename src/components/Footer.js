import React from 'react';
import './Footer.css';
import {FaHeart,FaCoffee} from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
            <footer className="footer_wrapper">
               <p>Made with <FaHeart style={iconStyles}/> and <FaCoffee style={iconStyles}></FaCoffee></p>
            </footer>
        </div>
    );
};
const iconStyles ={
    verticalAlign: '-3px'
}
export default Footer;
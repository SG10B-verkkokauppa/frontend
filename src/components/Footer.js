import './Footer.css';
import React from "react"
import { Link } from "react-router-dom";

export default function Footer(){
    return (
    <footer className="footer">
        <div className="container">
            <span><Link to="/contactus">Contact Us</Link></span>
        </div>
    </footer>
    );
}
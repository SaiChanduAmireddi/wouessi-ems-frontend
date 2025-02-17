import React from "react";
import { FaBell } from "react-icons/fa";
import "../../styles/components/Navbar.css";

const Navbar = ({ title, notificationCount }) => {
    return (
        <div className="navbar">
            <h1 className="navbar-title">{title}</h1>
            <div className="notification-icon">
                <FaBell className="bell-icon" />
                {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
            </div>
        </div>
    );
};

export default Navbar;

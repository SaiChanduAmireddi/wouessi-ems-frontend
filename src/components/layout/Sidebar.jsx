import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Sidebar.css";

const Sidebar = ({ employee, navLinks, onLogout }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">Welcome</div>

            <div className="sidebar-profile">
                <img src={employee.image} alt="Profile" className="profile-image" />
                <h3>{employee.name}</h3>
                <p>{employee.role}</p>
            </div>

            <ul className="sidebar-nav">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <span>{item.icon}</span>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Logout at Bottom */}
            <div className="sidebar-footer">
                <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;

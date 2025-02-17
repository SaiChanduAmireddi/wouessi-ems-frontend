import PropTypes from "prop-types";
import React from "react";
import "../../styles/components/Card.css";

const Card = ({ title, value, icon }) => {
    return (
        <div className="card">
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default Card;

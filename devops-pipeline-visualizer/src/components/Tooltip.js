import React from 'react';
import './Tooltip.css';

const Tooltip = ({ term, definition }) => {
    return (
        <div className="tooltip">
            <span className="term">{term}</span>
            <span className="tooltip-text">{definition}</span>
        </div>
    );
};

export default Tooltip;

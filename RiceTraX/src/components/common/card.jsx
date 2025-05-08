import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  onClick,
  backgroundColor = '#ffffff',
  borderRadius = '10px',
  padding = '16px',
  width = 'auto',
  height = 'auto'
}) => {
  return (
    <div 
      className={`shadow-md ${className}`}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        width,
        height
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Card;
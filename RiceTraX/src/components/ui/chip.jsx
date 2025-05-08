import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({
  label,
  onDelete,
  color = 'default',
  size = 'medium',
  className = '',
  icon,
  clickable = false,
  onClick,
  ...props
}) => {
  const colors = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-cyan-100 text-cyan-800',
  };

  const sizes = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  };

  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-full ${colors[color]} ${
        sizes[size]
      } ${clickable ? 'cursor-pointer hover:bg-opacity-80' : ''} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-1 p-0.5 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  icon: PropTypes.node,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Chip;
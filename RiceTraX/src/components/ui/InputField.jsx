import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  disabled = false,
  required = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  errorClassName = '',
  readOnly = false,
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`block mb-2 text-sm font-medium text-gray-700 ${labelClassName}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : ''
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${inputClassName}`}
        {...props}
      />
      {error && (
        <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>{error}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default InputField;
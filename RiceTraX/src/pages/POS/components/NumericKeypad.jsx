import React from 'react';
import PropTypes from 'prop-types';

const NumericKeypad = ({ onKeyPress, displayValue }) => {
  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['00', '0', 'X']
  ];

  return (
    <div className="mt-4">
      <div className="bg-[#000000ce] text-white p-4 mb-4 rounded-[10px] flex justify-center items-center">
        <span className="text-4xl font-bold">{displayValue || '0'}</span>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {keys.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map((key) => (
              <button
                key={key}
                className="bg-black text-white text-4xl font-bold py-3 rounded-[10px]"
                onClick={() => onKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

NumericKeypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired
};

export default NumericKeypad;
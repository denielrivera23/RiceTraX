import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = ({ onSave, onPrint }) => {
  return (
    <div className="bg-[#66a80ace] py-4 px-6 rounded-b-[20px] flex justify-end space-x-4 mt-4">
      <button 
        onClick={onSave}
        className="bg-[#d9d9d9] rounded-full p-4 flex flex-col items-center"
      >
        <img src="/images/img_download.png" alt="Save" className="w-12 h-12" />
        <span className="text-white text-sm font-bold mt-1">SAVE</span>
      </button>
      
      <button 
        onClick={onPrint}
        className="bg-[#d9d9d9] rounded-full p-4 flex flex-col items-center"
      >
        <img src="/images/img_print.png" alt="Print" className="w-12 h-12" />
        <span className="text-white text-sm font-bold mt-1">PRINT RECEIPT</span>
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  onSave: PropTypes.func.isRequired,
  onPrint: PropTypes.func.isRequired
};

export default ActionButtons;
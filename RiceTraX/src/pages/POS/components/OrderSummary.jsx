import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ 
  orderItems, 
  onIncreaseQuantity, 
  onDecreaseQuantity 
}) => {
  return (
    <div className="mt-4">
      {orderItems.map((item, index) => (
        <div key={index} className="bg-[#d9d9d9] mb-2 flex items-center">
          <div className="flex-1 p-2 border-r border-black">
            <span className="text-2xl font-bold">{item.name}</span>
          </div>
          <div className="w-24 p-2 text-center border-r border-black">
            <span className="text-3xl font-bold">{item.quantity}</span>
          </div>
          <div className="w-12 p-2 text-center border-r border-black">
            <button 
              className="text-3xl font-bold"
              onClick={() => onIncreaseQuantity(index)}
            >
              +
            </button>
          </div>
          <div className="w-12 p-2 text-center">
            <button 
              className="text-3xl font-bold"
              onClick={() => onDecreaseQuantity(index)}
            >
              -
            </button>
          </div>
        </div>
      ))}
      
      <div className="bg-[#d9d9d9] mt-4 flex items-center">
        <div className="flex-1 p-2 border-r border-black">
          <span className="text-2xl font-bold">Payment</span>
        </div>
        <div className="p-2 text-center">
          <span className="text-2xl font-bold">6000.00</span>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number
    })
  ).isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired
};

export default OrderSummary;
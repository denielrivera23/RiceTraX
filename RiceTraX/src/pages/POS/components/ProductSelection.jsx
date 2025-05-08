import React from 'react';
import PropTypes from 'prop-types';

const ProductSelection = ({ onProductSelect }) => {
  const riceProducts = [
    { id: 1, name: 'MAHARLIKA', category: 'rice' },
    { id: 2, name: 'SINANDOMENG', category: 'rice' },
    { id: 3, name: 'JASMIN', category: 'rice' },
    { id: 4, name: 'DINORADO', category: 'rice' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {riceProducts.map((product) => (
        <button
          key={product.id}
          className="bg-[#549859] text-black font-bold py-5 px-4 rounded text-center"
          onClick={() => onProductSelect(product)}
        >
          <span className="text-2xl">{product.name}</span>
        </button>
      ))}
    </div>
  );
};

ProductSelection.propTypes = {
  onProductSelect: PropTypes.func.isRequired,
};

export default ProductSelection;
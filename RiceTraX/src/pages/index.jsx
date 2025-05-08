import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import ProductSelection from './components/ProductSelection';
import OrderSummary from './components/OrderSummary';
import NumericKeypad from './components/NumericKeypad';
import ActionButtons from './components/ActionButtons';

const POSSystem = () => {
  const [orderItems, setOrderItems] = useState([
    { name: 'Maharlika', quantity: 6, price: 1000 }
  ]);
  
  const [displayValue, setDisplayValue] = useState('1,500');
  
  const handleProductSelect = (product) => {
    // Check if product already exists in order
    const existingItemIndex = orderItems.findIndex(
      item => item.name.toUpperCase() === product.name
    );
    
    if (existingItemIndex >= 0) {
      // Increase quantity if product already in order
      handleIncreaseQuantity(existingItemIndex);
    } else {
      // Add new product to order
      setOrderItems([
        ...orderItems,
        { name: product.name, quantity: 1, price: 0 }
      ]);
    }
  };
  
  const handleIncreaseQuantity = (index) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity += 1;
    setOrderItems(updatedItems);
  };
  
  const handleDecreaseQuantity = (index) => {
    const updatedItems = [...orderItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setOrderItems(updatedItems);
    } else {
      // Remove item if quantity becomes 0
      updatedItems.splice(index, 1);
      setOrderItems(updatedItems);
    }
  };
  
  const handleKeyPress = (key) => {
    if (key === 'X') {
      // Clear the display
      setDisplayValue('0');
    } else {
      // Remove commas for calculation
      let currentValue = displayValue.replace(/,/g, '');
      
      // Handle special cases
      if (currentValue === '0' && key !== '00') {
        currentValue = '';
      }
      
      // Append the new key
      const newValue = currentValue + key;
      
      // Format with commas
      const formattedValue = Number(newValue).toLocaleString();
      setDisplayValue(formattedValue);
    }
  };
  
  const handleSaveTransaction = () => {
    alert('Transaction saved successfully!');
    // Reset the order after saving
    setOrderItems([]);
    setDisplayValue('0');
  };
  
  const handlePrintReceipt = () => {
    alert('Printing receipt...');
    // In a real application, this would trigger the receipt printing
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="p-6 flex-1">
          <ProductSelection onProductSelect={handleProductSelect} />
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <NumericKeypad 
                onKeyPress={handleKeyPress} 
                displayValue={displayValue} 
              />
            </div>
            
            <div>
              <OrderSummary 
                orderItems={orderItems}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
              />
            </div>
          </div>
        </div>
        
        <ActionButtons 
          onSave={handleSaveTransaction}
          onPrint={handlePrintReceipt}
        />
      </div>
    </div>
  );
};

export default POSSystem;
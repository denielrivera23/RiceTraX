import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-full bg-[#66a80aa3] w-[300px]">
      <div className="flex flex-col p-6 space-y-8">
        <div className={`text-center py-2 ${isActive('/dashboard') ? 'font-bold' : 'font-medium'}`}>
          <Link to="/dashboard" className="text-black text-[36px]">Dashboard</Link>
        </div>
        
        <div className={`text-center py-2 ${isActive('/inventory') ? 'font-bold' : 'font-medium'}`}>
          <Link to="/inventory" className="text-black text-[36px]">Inventory</Link>
        </div>
        
        <div className={`bg-[#d9d9d9] rounded-[20px] text-center py-4 ${isActive('/pos') ? 'font-bold' : 'font-medium'}`}>
          <Link to="/pos" className="text-black text-[36px]">POS</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
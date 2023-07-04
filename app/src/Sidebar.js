import React, { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const sidebarStyle = {
    width: isExpanded ? '500px' : '80px',
    transition: 'width 0.3s ease',
    backgroundColor: 'lightgray',
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 999,
  };

  return (
    <div
      style={sidebarStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sidebar content */}
    </div>
  );
};

export default Sidebar;

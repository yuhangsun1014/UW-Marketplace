// src/components/MiddleSection.js

import React from 'react';
import './MiddleSection.css'; // Create MiddleSection.css

function MiddleSection({ children }) {
  return (
    <div className="middle-section">
      {children}
    </div>
  );
}

export default MiddleSection;
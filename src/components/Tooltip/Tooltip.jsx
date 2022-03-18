import React, { useEffect } from 'react';

import './Tooltip.css';

const Tooltip = ({ direction='left', data=[], hoverEvent }) => {

  const currentTooltip = document.querySelector('.tooltip')

  useEffect(() => {
    
    if(hoverEvent) {
      const {clientX, clientY} = hoverEvent;

      currentTooltip.style.left = `${clientX - 150}px`;
      currentTooltip.style.top = `${clientY - 200}px`;
    }

  }, [hoverEvent])
  
  return (
    <div 
      className={`tooltip tooltip--${direction}`}
    >
      <div className="tooltip__title">Posts: {data.length}</div>
      <div className="tooltip__body">{data}</div>
    </div>
  );
}

export default Tooltip;

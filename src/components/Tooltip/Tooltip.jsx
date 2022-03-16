import React from 'react';

import './Tooltip.css';

const Tooltip = ({ side, data=[] }) => {

  return (
    <div className={`tooltip tooltip--${side}`}>
      <div className="tooltip__title">Posts: {data.length}</div>
      <div className="tooltip__body">{data}</div>
    </div>
  );
}

export default Tooltip;

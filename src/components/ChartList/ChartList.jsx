import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Chart from './../Chart/Chart';
import './ChartList.css';

const ChartList = ({ users }) => {

  const [event, setEvent] = useState(null);

  const renderedChart = users.length && users.map(user => <Chart onHover={onHover} key={user.id} user={user} />)

  function onHover(event) {
    setEvent(event);
  }

  return (
    <div className="list ui segment">
      <Tooltip hoverEvent={event} />
    {users.length ? renderedChart : 'Loading...'}
    </div>
  );
}

export default ChartList;

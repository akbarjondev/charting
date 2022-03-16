import React from 'react';
import Chart from './../Chart/Chart';
import './ChartList.css';

const ChartList = ({ users }) => {

  const renderedChart = users.length && users.map(user => <Chart key={user.id} user={user} />)

  return (
    <div className="list ui segment">
    {users.length ? renderedChart : 'Loading...'}
    </div>
  );
}

export default ChartList;

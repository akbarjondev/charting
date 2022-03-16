import React from 'react';
import Chart from './../Chart/Chart';
import './ChartList.css';

const ChartList = ({ stat }) => {

  return (
    <div className="list ui segment">
    {console.log('rendered')}
    {console.log(stat)}
    </div>
  );
}

export default ChartList;

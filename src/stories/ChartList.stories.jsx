import React from 'react';

import ChartList from '../components/ChartList/ChartList';

export default {
  title: 'ChartList',
  component: ChartList,
};

const Template = (args) => <ChartList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  users: [
    {id: 1, name: 'Ali'},
    {id: 2, name: 'Ali'},
    {id: 3, name: 'Ali'},
    {id: 4, name: 'Ali'},
  ]
};
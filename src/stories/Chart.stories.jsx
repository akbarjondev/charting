import React from 'react';

import Chart from '../components/Chart/Chart';

export default {
  title: 'Chart',
  component: Chart,
};

const Template = (args) => <Chart {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  user: {
    id: 1,
  },
};
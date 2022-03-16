import React from 'react';

import Tooltip from '../components/Tooltip/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  side: 'right',
  label: 'Tooltip',
};
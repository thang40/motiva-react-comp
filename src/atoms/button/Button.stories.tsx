import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MTVButton, { ButtonProps } from './button.comp';

export default {
  title: 'Example/Button',
  component: MTVButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <MTVButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button'
};

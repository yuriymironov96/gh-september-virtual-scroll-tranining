import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { VirtualScroll } from './VirtualScroll';

export default {
  title: 'Virtual Scroll/Virtual Scroll',
  component: VirtualScroll,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const VSFoo: Story = () => <VirtualScroll />;

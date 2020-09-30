import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ListVirtualScroll } from './ListVirtualScroll';

export default {
  title: 'Virtual Scroll/Virtual Scroll',
  component: ListVirtualScroll,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withKnobs],
} as Meta;

export const ListVirtualScrollStory: Story = () => {
  const count = number('Count of elements', 500, { step: 100 });
  const data = items(count);

  return <ListVirtualScroll items={data}></ListVirtualScroll>;
};

export const ListScrollStory: Story = () => {
  const count = number('Count of elements', 100, { step: 100 });
  const data = items(count);

  const style = {
    height: '100px',
    width: '100px',
    overflow: 'auto',
  };

  return (
    <div style={style}>
      {data.map((dataItem, index) => (
        <div key={index}>{dataItem}</div>
      ))}
    </div>
  );
};

function items(amount: number): number[] {
  return Array(amount).fill(amount);
}

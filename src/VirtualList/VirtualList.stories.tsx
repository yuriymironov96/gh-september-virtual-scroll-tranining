import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { VirtualList } from './VirtualList';

export default {
  title: 'Virtual List/Virtual List',
  component: VirtualList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withKnobs],
} as Meta;

export const ListVirtualScrollStory: Story = () => {
  const count = number('Count of elements', 500, { step: 100 });
  const data = items(count);

  return <VirtualList data={data} itemHeight={30}></VirtualList>;
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
        <div key={index}>{dataItem.label}</div>
      ))}
    </div>
  );
};

function items(amount: number) {
  const data = [];
  for (let i = 0; i < amount; i++) {
    data.push({ label: `Row ${i}` });
  }
  return data;
}

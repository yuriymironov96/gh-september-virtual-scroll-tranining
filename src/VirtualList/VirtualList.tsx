import React, { FC, MutableRefObject, useRef, useState } from 'react';
import './VirtualList.css';

interface ItemProps {
  top: number;
  height: number;
  label: string;
}

interface VirtualListProps {
  itemHeight: number;
  data: { label: string }[];
}

export const Item: FC<ItemProps> = ({ top, label, height }) => {
  return (
    <div className="item" style={{ top, height }}>
      {label}
    </div>
  );
};

export const VirtualList: FC<VirtualListProps> = ({ itemHeight, data }) => {
  const containerStyle = { height: data.length * itemHeight };
  const numVisibleItems = Math.trunc(300 / itemHeight);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(numVisibleItems);
  const viewPort = useRef() as MutableRefObject<HTMLDivElement>;

  const renderRows = () => {
    let result = [];
    for (let i = start; i < end + 1; i++) {
      let item = data[i];
      result.push(<Item key={i} label={item.label} top={i * itemHeight} height={itemHeight} />);
    }
    return result;
  };

  const scrollPos = () => {
    let currentIndex = Math.trunc(viewPort.current.scrollTop / itemHeight);
    currentIndex =
      currentIndex - numVisibleItems >= data.length
        ? currentIndex - numVisibleItems
        : currentIndex;
    if (currentIndex !== start) {
      console.log('Redraw');
      setStart(currentIndex);
      setEnd(
        currentIndex + numVisibleItems >= data.length
          ? data.length - 1
          : currentIndex + numVisibleItems,
      );
    }
  };

  return (
    <div ref={viewPort} className="viewPort" onScroll={scrollPos}>
      <div className="itemContainer" style={containerStyle}>
        {renderRows()}
      </div>
    </div>
  );
};

import React, { FC, ReactNode, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface ListVirtualScrollProps<T> {
  items: any[];
  height?: string;
}

interface DefaultRowRendererProps<T> {
  item: T;
}

interface ListVirtualScrollChildProps {
  children: ReactNode;
}

export const ListVirtualScroll: FC<ListVirtualScrollProps<string>> = ({
  items,
  height = '100px',
}) => {
  const style = useMemo(
    () => ({
      height,
      width: '100px',
      overflow: 'auto',
    }),
    [height],
  );
  const viewItems = items.map((item, index) => (
    <ListVirtualScrollChild key={index}>{item}</ListVirtualScrollChild>
  ));
  return <div style={style}>{viewItems}</div>;
};

const ListVirtualScrollChild: FC<ListVirtualScrollChildProps> = ({ children }) => {
  const [ref, inView] = useInView();
  return <div ref={ref}>{inView ? children : null}</div>;
};

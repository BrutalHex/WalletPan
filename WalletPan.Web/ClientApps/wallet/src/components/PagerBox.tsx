import React, { useState, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
interface IPagerBox {
  pageSize: number;

  recordCount: number;
  loadNext(id: number, pageSize: number): void;
}

const PagerBox: FunctionComponent<IPagerBox> = (props: IPagerBox) => {
  const current = 1;
  const pageFrame = 1;

  const [data, setData] = useState({ ...props, current, pageFrame });

  const getMaxPagerNumber = () => {
    return Math.ceil(props.recordCount / props.pageSize);
  };

  const handleClick = (id: number) => {
    if (id <= 0) id = 1;

    const max = getMaxPagerNumber();

    if (id > max) {
      id = max;
    }

    setData({
      ...data,
      current: id,
      pageSize: data.pageSize,
      pageFrame: 1,
    });
    props.loadNext(id, data.pageSize);
  };

  const getWholeArray = () => {
    const items = [];

    const max = getMaxPagerNumber();
    console.log(props.recordCount);
    for (let number = 1; number <= max; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === data.current}
          onClick={() => handleClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  const renderInner = () => {
    const items = getWholeArray();

    let low = data.current - 1;
    if (low - 2 < 2) low = 2;

    if (low + 2 > items.length) {
      low = items.length - 2;
    }

    const bar = items.slice(low - 2, low + 2);
    return bar;
  };

  return (
    <div className="row pager-box">
      <Pagination>
        <Pagination.Prev onClick={() => handleClick(data.current - 1)} />
        {renderInner()}
        <Pagination.Next onClick={() => handleClick(data.current + 1)} />
      </Pagination>
    </div>
  );
};

PagerBox.propTypes = {
  loadNext: PropTypes.func.isRequired,
};

export default PagerBox;

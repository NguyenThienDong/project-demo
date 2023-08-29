import { Pagination } from 'antd';
import React from 'react';

const PaginationBase = ({ total, defaultPageSize }: { total?: number; defaultPageSize?: number }) => {
  function onShowSizeChange(current: number, pageSize: number) {
    console.log(current, pageSize);
  }
  return (
    <Pagination
      total={total}
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      showTotal={(total, range) => `${range[0]}-${range[1]} trên tổng số ${total}`}
      defaultPageSize={defaultPageSize}
      // pageSizeOptions={PAGE_SIZE_OPTIONS}
    />
  );
};

export default PaginationBase;

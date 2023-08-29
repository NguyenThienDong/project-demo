import EmptyIcon from '@/assets/logo/empty_icon.png';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';
import './index.less';

type TableBaseProps = {
  columns: ColumnsType[] | any[];
  dataSource: any[];
  pagination?: any;
  iconEmpty?: React.ReactNode;
  textEmpty?: string;
  rowSelection?: any;
  scroll?: object;
  rowKey?: string;
  loading?: boolean;
  onChange?: TableProps<any>['onChange'];
};

const TableBase: React.FC<TableBaseProps> = ({
  columns = [],
  dataSource,
  pagination = false,
  iconEmpty,
  textEmpty,
  rowSelection,
  scroll,
  rowKey = 'id',
  loading = false,
  onChange,
}) => {
  return (
    <div className="mb-table">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={onChange}
        loading={loading}
        locale={{
          emptyText: (
            <div className="table-empty">
              <span>{iconEmpty ? iconEmpty : <img src={EmptyIcon} height={181} width={213} />}</span>
              <span>{textEmpty || 'Không có dữ liệu'}</span>
            </div>
          ),
        }}
        rowSelection={rowSelection}
        scroll={scroll}
        rowKey={rowKey}
      />
    </div>
  );
};

export default React.memo(TableBase);

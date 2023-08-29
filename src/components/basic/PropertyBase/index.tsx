import { IPropsField } from '@/pages/folders/components/CheckDocument';
import { Col, Input, Row } from 'antd';
import { isEmpty } from 'lodash';
import { FC } from 'react';

type MBALPropertyProps = {
  dataItem: IPropsField;
  selectedItem: number | undefined;
  onChangeData: (value: string, key: string) => void;
  isReadOnly: boolean;
};
const MBALProperty: FC<MBALPropertyProps> = ({ dataItem, selectedItem, onChangeData, isReadOnly }) => {
  return (
    <>
      <Row gutter={[12, 12]} align="middle" style={{ marginBottom: '20px' }}>
        <Col span={4}>
          <span style={{ cursor: 'pointer' }}>{dataItem?.name || dataItem.label}: </span>
        </Col>
        <Col span={20}>
          <Input
            maxLength={500}
            id={`input-data-${dataItem.id}`}
            value={dataItem.value}
            autoFocus={dataItem.id === selectedItem}
            status={isEmpty(dataItem.value) ? 'warning' : undefined}
            onChange={e => onChangeData(e.target.value, dataItem.label)}
            readOnly={isReadOnly}
          />
        </Col>
      </Row>
    </>
  );
};

export default MBALProperty;

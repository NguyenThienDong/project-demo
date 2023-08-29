import { Checkbox, Col, Form, Space } from 'antd';
import React from 'react';

type CheckboxBaseProps = {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  options: any[];
  span?: number | null;
  value?: any;
  onChange?: Function;
  vertical?: boolean;
};

export const CheckboxBase: React.FC<CheckboxBaseProps> = ({
  label,
  name,
  required = false,
  disabled,
  options,
  value,
  span = 24,
  onChange,
  vertical = false,
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(name, e);
  };
  return (
    <Col span={span || undefined}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required,
            message: `${label} không được để trống`,
          },
        ]}
      >
        {vertical ? (
          <Checkbox.Group onChange={handleChange} value={value}>
            <Space direction="vertical">
              {options.map((item, i) => (
                <Checkbox value={item.id || item.code || item.value} key={item.id || item.value || i}>
                  {item.label || item.name || item.code}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        ) : (
          <Checkbox.Group onChange={handleChange} value={value}>
            {options.map((item, i) => (
              <Checkbox value={item.id || item.code || item.value} key={item.id || item.value || i}>
                {item.label || item.name || item.code}
              </Checkbox>
            ))}
          </Checkbox.Group>
        )}
      </Form.Item>
    </Col>
  );
};

import { Form, Radio, Space, Col } from 'antd';
import React from 'react';

type RadioBaseProps = {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  options: any[];
  onChange?: Function;
  vertical?: boolean;
  span: number;
  value?: any;
};
export const RadioBase: React.FC<RadioBaseProps> = ({
  label,
  name,
  required = false,
  disabled,
  options,
  value,
  onChange,
  vertical,
  span = 24,
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(name, e);
  };
  return (
    <Col span={span}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: required ? true : false,
            message: `${label} không được để trống`,
          },
        ]}
      >
        {vertical ? (
          <Radio.Group onChange={handleChange} value={value} disabled={disabled}>
            <Space direction="vertical">
              {options.map((item, i) => (
                <Radio value={item.id || item.value || item.code} key={item.id || item.value || item.code || i}>
                  {item.title || item.label || item.name || item.code}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ) : (
          <Radio.Group onChange={handleChange} value={value} disabled={disabled} className="flex-around">
            {options.map((item, i) => (
              <Radio value={item.id || item.value || item.code} key={item.id || item.value || item.code || i}>
                {item.title || item.label || item.name || item.code}
              </Radio>
            ))}
          </Radio.Group>
        )}
      </Form.Item>
    </Col>
  );
};

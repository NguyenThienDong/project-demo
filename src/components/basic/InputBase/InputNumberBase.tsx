import { Form, InputNumber } from 'antd';
import React from 'react';

type InputNumberIProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  min?: number;
  max?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange?: Function;
  format: string;
  disabledDate: Function;
  status?: 'warning' | 'error';
  formatter: string;
  parser: string;
};

export const InputNumberBase: React.FC<InputNumberIProps> = ({
  label,
  name,
  placeholder,
  required = true,
  min,
  max,
  addonBefore,
  addonAfter,
  formatter,
  parser,
  readOnly,
  onChange,
  status,
}) => {
  const handleChange = (e: number | null) => {
    onChange && onChange(name, e);
  };
  return (
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
      <InputNumber
        onChange={handleChange}
        readOnly={readOnly}
        placeholder={placeholder}
        min={min}
        max={max}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        // formatter={(value) => formatter(value)}
        // parser={(value) => parser(value)}
        status={status}
      />
    </Form.Item>
  );
};

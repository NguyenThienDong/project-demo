import { Form, Select } from 'antd';
import React from 'react';
const { Option } = Select;

type SelectBaseProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  mode?: 'multiple' | 'tags';
  options: any[];
  onChange?: Function;
  allowClear?: boolean;
  maxTagCount?: number | 'responsive';
  span?: number;
  loading?: boolean;
};

const SelectBase: React.FC<SelectBaseProps> = ({
  name,
  label,
  placeholder = 'Chọn',
  required = false,
  options,
  mode,
  onChange,
  allowClear = true,
  maxTagCount = 'responsive',
  span = 24,
  loading,
}) => {
  const handleChange = (value: any, children: any) => {
    onChange && onChange(name, value, children);
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
      <Select
        allowClear={allowClear}
        mode={mode}
        showSearch
        options={options}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={handleChange}
        maxTagCount={maxTagCount}
        filterOption={(input, option) => option?.label?.toLowerCase().indexOf(input?.toLowerCase()) >= 0}
        filterSort={(optionA, optionB) =>
          optionA?.children?.toLowerCase().localeCompare(optionB?.children?.toLowerCase())
        }
      ></Select>
    </Form.Item>
  );
};

export default React.memo(SelectBase);

import { Col, DatePicker, Form } from 'antd';
import { Dayjs } from 'dayjs';
import React from 'react';
import type { DatePickerProps } from 'antd/es/date-picker';

type DatePickerIProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  onChange?: Function;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  span?: number;
  format?: string;
  disabledDate?: Function;
  status?: 'warning' | 'error';
  className?: string;
};

const DatePickerBase: React.FC<DatePickerIProps> = ({
  name,
  label,
  placeholder = 'Chọn ngày',
  required,
  minDate,
  maxDate,
  onChange,
  picker = 'date',
  span = 24,
  format = 'DD/MM/YYYY',
  disabledDate,
  status,
  className,
}) => {
  const disabledDatePicker = (current: Dayjs) => {
    if (current && disabledDate) {
      if (minDate && !maxDate) {
        return current <= minDate;
      } else if (maxDate && !minDate) {
        return current > maxDate;
      } else if (minDate && maxDate) {
        return current > maxDate && current <= minDate;
      } else {
        return false;
      }
    }
    return false;
  };
  const handleChange = (date: DatePickerProps['value'], dateString: string) => {
    if(onChange) {
      onChange(name, date, dateString);
    }
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
        <DatePicker
          format={format}
          placeholder={placeholder}
          onChange={handleChange}
          picker={picker}
          status={status}
          disabledDate={disabledDatePicker}
          className={className + 'w-100'}
        />
      </Form.Item>
    </Col>
  );
};

export default DatePickerBase;

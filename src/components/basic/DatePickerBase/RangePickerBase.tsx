import { Col, DatePicker, Form } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

type RangePickerBaseProps = {
  name: string;
  label: string;
  placeholder?: any;
  required?: boolean;
  onChange?: Function;
  picker?: any;
  span?: number;
  format?: string;
  status?: 'error' | 'warning';
  value?: any;
  disabledDate?: (currentDate: Dayjs) => boolean;
};

const RangePickerBase: React.FC<RangePickerBaseProps> = ({
  name,
  label,
  placeholder = ['From date', 'To date'],
  status,
  required,
  onChange,
  picker = 'date',
  value,
  span = 24,
  format = 'DD/MM/YYYY',
  disabledDate,
}) => {
  const [dates, setDates] = useState<any>(null);

  const disabledRangeDate = (current: Dayjs) => {
    if (disabledDate) {
      return disabledDate(current);
    }
    return false;
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const handleChange = (date: RangePickerProps['value'], dateString: [string, string]) => {
    onChange && onChange(name, date, dateString);
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
        <RangePicker
          format={format}
          status={status}
          placeholder={placeholder}
          onChange={handleChange}
          onCalendarChange={val => setDates(val)}
          picker={picker}
          disabledDate={disabledRangeDate}
          onOpenChange={handleOpenChange}
          value={dates || value}
          className="w-100"
        />
      </Form.Item>
    </Col>
  );
};

export default RangePickerBase;

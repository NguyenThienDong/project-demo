import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Col, Form, Input } from 'antd';
import React from 'react';

type InputBaseIProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  readOnly?: boolean;
  typeInput?: 'TextArea' | 'Password';
  autoFocus?: boolean;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode | string;
  addonAfter?: React.ReactNode | string;
  onChange?: Function;
  span?: number;
  format?: string;
  status?: 'warning' | 'error';
  pattern?: RegExp;
  onClick?: Function;
  type?: any;
  maxLength?: number;
  rules?: any[];
  className?: string;
  hasFeedback?: boolean;
  validateStatus?: '' | 'warning' | 'error' | 'success' | 'validating';
  help?: React.ReactNode;
};

const InputBase: React.FC<InputBaseIProps> = ({
  label,
  name,
  placeholder = 'Nhập dữ liệu',
  required = false,
  type = 'text',
  min,
  max,
  readOnly,
  typeInput,
  autoFocus = false,
  onChange,
  addonBefore,
  addonAfter,
  status,
  prefix,
  span = 24,
  pattern,
  onClick,
  maxLength,
  rules = [],
  className,
  hasFeedback = false,
  validateStatus = '',
  help,
}) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(name, e);
    }
  };
  const onClickInput = () => {
    if (onClick) {
      onClick();
    }
  };
  const renderInput = (typeInput?: 'TextArea' | 'Password') => {
    const showIcon = (visible: boolean) => {
      if (visible) {
        return <EyeTwoTone />;
      } else {
        return <EyeInvisibleOutlined />;
      }
    };
    if (typeInput === 'TextArea') {
      return (
        <Input.TextArea
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={placeholder}
          status={status}
          maxLength={maxLength}
          autoFocus={autoFocus}
          className={className}
        />
      );
    } else if (typeInput === 'Password') {
      return (
        <Input.Password
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={placeholder}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          autoFocus={autoFocus}
          status={status}
          maxLength={maxLength}
          className={className}
          iconRender={(visible) => showIcon(visible)}
        />
      );
    } else {
      return (
        <Input
          type={type}
          onChange={handleChange}
          readOnly={readOnly}
          placeholder={placeholder}
          autoFocus={autoFocus}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          maxLength={maxLength}
          status={status}
          prefix={prefix}
          onClick={onClickInput}
          className={className}
        />
      );
    }
  };
  return (
    <Col span={span}>
      <Form.Item
        name={name}
        label={label}
        hasFeedback={hasFeedback}
        validateStatus={validateStatus}
        help={help}
        rules={[
          ...rules,
          {
            required,
            message: `${label} không được để trống`,
          },
          {
            type,
            message: `Không đúng định dạng ${type}`,
          },
          {
            min,
            message: `${label} chứa ít nhất ${min} ký tự`,
          },
          {
            max,
            message: `${label} chứa không quá ${max} ký tự`,
          },
          {
            pattern,
            message: `${label} không hợp lệ`,
          },
        ]}
      >
        {renderInput(typeInput)}
      </Form.Item>
    </Col>
  );
};
export default React.memo(InputBase);

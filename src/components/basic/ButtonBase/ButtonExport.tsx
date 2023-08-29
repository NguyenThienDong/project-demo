import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC, memo } from 'react';

type ButtonExportProps = {
  text?: string;
  icon?: React.ReactNode;
};

const ButtonExport: FC<ButtonExportProps> = ({ text = 'Xuất dữ liệu', icon }) => {
  const handleClick = () => {
    console.log('export data');
  };
  return (
    <Button icon={icon || <DownloadOutlined />} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default memo(ButtonExport);

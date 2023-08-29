import { Popover } from 'antd';
import React, { memo } from 'react';
import './index.less';

type PopoverProps = {
  content: React.ReactNode;
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
  trigger?: 'click' | 'hover' | 'focus';
};

const PopoverBase: React.FC<PopoverProps> = ({
  content,
  title,
  children,
  placement = 'bottomLeft',
  trigger = 'click',
}) => {
  return (
    <div className="mbal-popover">
      <Popover content={content} title={title} trigger={trigger} placement={placement} className="mb-popover">
        {children}
      </Popover>
    </div>
  );
};

export default memo(PopoverBase);

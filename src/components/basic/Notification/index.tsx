import { notification } from 'antd';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

type NotificationProps = {
  message: React.ReactNode | string;
  description: React.ReactNode | string;
  children?: React.ReactNode;
  type: NotificationType;
  duration?: number;
};

const NotificationComponent: React.FC<NotificationProps> = props => {
  const [api, contextHolder] = notification.useNotification();
  const { message, description, children, type, duration } = props;

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message,
      description,
      duration,
    });
  };

  return (
    <>
      {contextHolder}
      <div onClick={() => openNotificationWithIcon(type)}>{children}</div>
    </>
  );
};

export default React.memo(NotificationComponent);

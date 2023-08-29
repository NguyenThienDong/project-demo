import { Modal } from 'antd';
import React from 'react';

type ModalBaseProps = {
  title: string | React.ReactNode;
  open: boolean;
  okText?: string;
  cancelText?: string;
  onOk?: any;
  onClose?: any;
  children: React.ReactNode;
  okType?: string;
  width?: number;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  footer?: React.ReactNode | null;
  centered?: boolean;
  okButtonProps?: any;
  confirmLoading?: boolean;
};

const ModalBase: React.FC<ModalBaseProps> = ({
  title,
  open,
  onOk,
  onClose,
  children,
  okType = 'primary',
  width,
  destroyOnClose = false,
  maskClosable = true,
  footer,
  centered = true,
  okText = 'Lưu',
  cancelText = 'Đóng',
  okButtonProps,
  confirmLoading = false,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onClose}
      width={width}
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
      centered={centered}
      footer={footer}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={okButtonProps}
      confirmLoading={confirmLoading}
    >
      {children}
    </Modal>
  );
};

export default ModalBase;

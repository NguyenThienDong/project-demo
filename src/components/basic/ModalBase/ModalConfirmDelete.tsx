import { Modal } from 'antd';
import React, { memo } from 'react';
import './index.less';

type ModalConfirmDeleteProps = {
  title: string | React.ReactNode;
  open: boolean;
  okText?: string;
  cancelText?: string;
  onOk?: any;
  onClose?: any;
  width?: number;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  footer?: React.ReactNode | null;
  centered?: boolean;
  titleRemove?: string;
  nameRemove?: string;
  confirmLoading?: boolean;
};

const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({
  title,
  open,
  onOk,
  onClose,
  width,
  destroyOnClose = false,
  maskClosable = true,
  footer,
  centered = true,
  okText = 'Lưu',
  cancelText = 'Đóng',
  titleRemove,
  nameRemove,
  confirmLoading
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
      confirmLoading={confirmLoading}
      okText={okText}
      cancelText={cancelText}
      className="mb-modal-delete"
    >
      <span>{titleRemove}</span>
      <span className="text-error">{nameRemove}</span>
    </Modal>
  );
};

export default memo(ModalConfirmDelete);

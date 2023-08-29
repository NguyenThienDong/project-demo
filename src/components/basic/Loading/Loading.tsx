import { Spin } from 'antd';

export const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading">
      <Spin tip="Loading..." size="large" className="spinner" />
    </div>
  );
};

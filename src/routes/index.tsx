import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Dashboard from '@/pages/dashboard';
import LayoutPage from '@/pages/layout';
import { ROUTERS } from '@/utils/routers';

import WrapperRouteComponent from './config';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const UserManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/user-management'));
const ManufacturerManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/manufacturer-management'));
const DeviceManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/device-management'));
const OrderManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/order-management'));
const RoleManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/role-management'));
const ProjectManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/project-management'));
const DepartmentManagement = lazy(() => import(/* webpackChunkName: "user'"*/ '@/pages/department-management'));

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: ROUTERS.dashboard,
        element: <WrapperRouteComponent element={<Dashboard />} titleId="Dashboard" />,
      },
      {
        path: ROUTERS.user,
        element: <WrapperRouteComponent element={<UserManagement />} titleId="User management" />,
      },
      {
        path: ROUTERS.role,
        element: <WrapperRouteComponent element={<RoleManagement />} titleId="Role management" />,
      },
      {
        path: ROUTERS.project,
        element: <WrapperRouteComponent element={<ProjectManagement />} titleId="Project management" />,
      },
      {
        path: ROUTERS.department,
        element: <WrapperRouteComponent element={<DepartmentManagement />} titleId="Department management" />,
      },
      {
        path: ROUTERS.manufacturer,
        element: <WrapperRouteComponent element={<ManufacturerManagement />} titleId="Manufacturer management" />,
      },
      {
        path: ROUTERS.device,
        element: <WrapperRouteComponent element={<DeviceManagement />} titleId="Device management" />,
      },
      {
        path: ROUTERS.order,
        element: <WrapperRouteComponent element={<OrderManagement />} titleId="Order management" />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;

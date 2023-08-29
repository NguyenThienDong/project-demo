import type { MenuList } from '@/interface/layout/menu.interface';

import { ROUTERS } from '@/utils/routers';

export const menuList: MenuList = [
  {
    code: 'dashboard',
    label: 'Trang chủ',
    icon: 'dashboard',
    path: 'dashboard',
  },
  {
    code: 'device-service',
    label: 'Device Service',
    icon: 'permission',
    path: '/device-service',
    children: [
      {
        code: 'manufacturer',
        label: 'Manufacturer Management',
        path: ROUTERS.manufacturer,
      },
      {
        code: 'device',
        label: 'Device Management',
        path: ROUTERS.device,
      },
      {
        code: 'order',
        label: 'Projects',
        path: ROUTERS.order,
      },
    ],
  },
  {
    code: 'user-service',
    label: 'User Service',
    icon: 'permission',
    path: '/user-service',
    children: [
      {
        code: 'user',
        label: 'User Management',
        path: ROUTERS.user,
      },
      {
        code: 'role',
        label: 'Role Management',
        path: ROUTERS.role,
      },
      {
        code: 'project',
        label: 'Projects',
        path: ROUTERS.project,
      },
      {
        code: 'department',
        label: 'Departments',
        path: ROUTERS.department,
      },
    ],
  },
];

import { RouteObject } from 'react-router-dom';

import FistScreen from '.';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FistScreen />,
    errorElement: <div>Tela Error</div>,
  },
];

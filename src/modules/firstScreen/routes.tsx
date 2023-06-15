import { RouteObject } from 'react-router-dom';

import FistScreen from '.';
import PageNotFound from './screens/PageNotFound';

export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = '/',
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FistScreen />,
    errorElement: <PageNotFound />,
  },
];

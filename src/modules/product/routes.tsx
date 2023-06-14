import { RouteObject } from 'react-router-dom';

import ProductScreen from '.';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
}

export const productRoutes: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductScreen />,
  },
];

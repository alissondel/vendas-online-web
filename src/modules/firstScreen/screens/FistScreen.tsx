import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../product/routes';

function FistScreen() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, []); //eslint-disable-line

  return <Spin />;
}

export default FistScreen;

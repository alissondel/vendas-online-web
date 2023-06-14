import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { loginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

function FistScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) navigate(ProductRoutesEnum.PRODUCT);
    else navigate(loginRoutesEnum.LOGIN);
  }, []); //eslint-disable-line
  return <Spin />;
}

export default FistScreen;

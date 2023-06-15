import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export default function useLogin() {
  const navigate = useNavigate();
  const { setNotification, setUser } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(false);

  async function loginData(data: unknown): Promise<void> {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, data)
      .then((res) => {
        setUser(res.user);
        setAuthorizationToken(res.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
        return res;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      })
      .finally(() => setLoading(false));
  }

  return {
    loginData,
    loading,
  };
}

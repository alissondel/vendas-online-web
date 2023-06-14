import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export default function usePost() {
  const { setNotification } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(false);

  async function postData<T>(url: string, data: unknown): Promise<T | undefined> {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, data)
      .then((res) => {
        setNotification('Usuário logado com sucesso!', 'success');
        return res;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      })
      .finally(() => setLoading(false));

    return returnData;
  }

  return {
    postData,
    loading,
  };
}

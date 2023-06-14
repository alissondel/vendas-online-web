import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface UseFetchProps {
  url: string;
}

export default async function useFetch({ url }: UseFetchProps) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (url) loadData();
  }, [url]); //eslint-disable-line

  async function loadData() {
    setLoading(true);
    return await axios
      .get(url)
      .then((response: AxiosResponse) => {
        setData(response.data);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }

  return {
    data,
    loading,
    error,
  };
}

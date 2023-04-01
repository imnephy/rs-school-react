import { useState } from 'react';

const useFetching = (
  callback: (value: string, page?: number) => Promise<void>
): [(value: string, page?: number) => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fetching = async (value = '') => {
    try {
      setIsLoading(true);
      await callback(value);
      setError('');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

const useGet = (fetcher: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getMutation = useMutation(fetcher, {
    onSuccess: (data) => {
      setData(data);
      setTimeout(() => setLoading(false), 500);
    },
    onError: (error: { message: string }) => {
      setError(error.message);
      setLoading(false);
    },
  });

  useEffect(() => {
    getMutation.mutate();
  }, [fetcher]);

  return { data, loading, error };
};

export default useGet;

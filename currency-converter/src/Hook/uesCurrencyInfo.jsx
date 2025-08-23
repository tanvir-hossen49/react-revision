import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    let isMounted = true;
    setError(null);

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch currency data");
        return res.json();
      })
      .then(res => isMounted &&  setData(res.rates || {}))
      .catch(err => isMounted && setError(err.message))

    return () => {
      isMounted = false; 
    };
  }, [currency]);

  return { data, error };
}

import { useState, useEffect } from "react";

/**
 * This custom hook fetches the data when envoked.
 */
const URL =
  "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([{ error_message: null }]);

  /**
   * NEED TO ADD LOADING STUFF HERE.
   */
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error("HTTP ERROR: " + res.status);
        }

        const products = await res.json();
        setProducts(products);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
      }
    };

    asyncFetch();
  }, []);

  return { products, error };
};

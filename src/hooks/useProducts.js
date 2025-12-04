import { useState, useEffect } from "react";

const URL =
  "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const res = await fetch(URL);

        if (!res.ok) {
          console.error("Failed to fetch products:", res.statusText);
          throw new Error("HTTP ERROR: " + res.status);
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    asyncFetch();
  }, []);

  return { products, error, loading };
};

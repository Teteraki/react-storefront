import { useState, useEffect } from "react";

const URL =
  "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

// takes the array directly
const adminInfoCalc = (data) => {
  // calculate admin info for a single product
  const adminInfo = (product) => {
    const { sales, price, cost } = product;

    const dom_gross = sales.domestic * price;
    const intl_gross = sales.international * price;
    const total_gross = sales.total * price;

    const dom_cost = sales.domestic * cost;
    const intl_cost = sales.international * cost;
    const total_cost = sales.total * cost;

    const dom_profit = dom_gross - dom_cost;
    const intl_profit = intl_gross - intl_cost;
    const total_profit = total_gross - total_cost;

    const round = (num) => Number(num.toFixed(2));

    return {
      dom_gross: round(dom_gross),
      intl_gross: round(intl_gross),
      total_gross: round(total_gross),

      dom_cost: round(dom_cost),
      intl_cost: round(intl_cost),
      total_cost: round(total_cost),

      dom_profit: round(dom_profit),
      intl_profit: round(intl_profit),
      total_profit: round(total_profit),
    };
  };

  // map the data and add calculated values into each product
  const modified = data.map((product) => {
    const info = adminInfo(product);
    return {
      ...product,
      ...info,
    };
  });

  return modified;
};

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
        const modified_data = adminInfoCalc(data);
        setProducts(modified_data);
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

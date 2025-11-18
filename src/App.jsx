import "./App.css";
import { Navbar } from "./components/Navbar";

import { useProducts } from "./hooks/useProducts";

import { Footer } from "./components/Footer";
import { Home } from "./views/Home";

export const App = () => {
  const { products, loading, error } = useProducts();

  // if (error) return <div>{error.message}</div>;

  return (
    <div>
      {/* <ul>
        {products.map((p, i) => (
          <li key={i}>{JSON.stringify(p)}</li>
        ))}
      </ul> */}

      <Navbar />
      <Home products={products} error={error} loading={loading} />
      <Footer />
    </div>
  );
};

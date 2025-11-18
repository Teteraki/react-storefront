import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { useProducts } from "./hooks/useProducts";
import { FeaturedContainer } from "./components/FeaturedContainer";
import { Footer } from "./components/Footer";

export const App = () => {
  const { products, error } = useProducts();

  // if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* <ul>
        {products.map((p, i) => (
          <li key={i}>{JSON.stringify(p)}</li>
        ))}
      </ul> */}

      <Navbar />
      <HeroBanner />
      <FeaturedContainer products={products.slice(0, 12)} />
      <Footer />
    </>
  );
};

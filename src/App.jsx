import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useProducts } from "./hooks/useProducts";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Browse } from "./views/Browse";
import { Men } from "./views/Men"

export const App = () => {

  const { products, loading, error } = useProducts();

  // if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home products={products} error={error} loading={loading} />}
        />
        <Route
          path="/browse"
          element={
            <Browse products={products} error={error} loading={loading} />
          }
        />
        <Route
          path="/men"
          element={
            <Men products={products} error={error} loading={loading} />
          }
        />

        <Route
          path="/browse/:gender"
          element={
            <Browse products={products} error={error} loading={loading} />
          }
        />

        <Route
          path="/browse/:gender/:category"
          element={
            <Browse products={products} error={error} loading={loading} />
          }
        />

        <Route
          path="/browse/:category"
          element={
            <Browse products={products} error={error} loading={loading} />
          }
        />

    

      
       
        
      </Routes>
          
      <Footer />
    </div>
  );
};

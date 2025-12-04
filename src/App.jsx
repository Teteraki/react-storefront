import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useProducts } from "./hooks/useProducts";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { Browse } from "./views/Browse";
import { Men } from "./views/Men";
import { Women } from "./views/Women";
import { CartProvider } from "./hooks/cartContext";
import { CartContainer } from "./components/cart/CartContainer";
import { AuthProvider } from "./hooks/AuthContext";
import { LoginForm } from "./components/login/LoginForm";
import { SingleProduct } from "./views/SingleProduct";
import { Dashboard } from "./views/Dashboard";

export const App = () => {
  const { products, loading, error } = useProducts();

  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Home products={products} error={error} loading={loading} />
            }
          />

          <Route path="/login" element={<LoginForm />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route
            path="/men"
            element={
              <Men products={products} error={error} loading={loading} />
            }
          />

          <Route
            path="/women"
            element={
              <Women products={products} error={error} loading={loading} />
            }
          />
          <Route
            path="/browse"
            element={
              <Browse products={products} error={error} loading={loading} />
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
            path="/browse/category/:category"
            element={
              <Browse products={products} error={error} loading={loading} />
            }
          />

          <Route
            path="/product/:id"
            element={<SingleProduct products={products} />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard products={products} />}
          />
        </Routes>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

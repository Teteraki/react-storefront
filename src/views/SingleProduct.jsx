import { SingleProductContainer } from "../components/products/SingleProductContainer";
import { RelatedProducts } from "../components/products/RelatedProducts";
import { useParams } from "react-router-dom";

export const SingleProduct = ({ products, loading, error }) => {
  const { id } = useParams();

  const singleProduct = products.find((p) => p.id === id);

  if (!singleProduct) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <SingleProductContainer product={singleProduct} />

      <RelatedProducts
        product={singleProduct}
        products={products}
        loading={loading}
        error={error}
      />
    </>
  );
};

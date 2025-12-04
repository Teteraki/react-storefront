import { SingleProductContainer } from "../components/products/SingleProductContainer";
import { useParams } from "react-router-dom";

export const SingleProduct = ({ products }) => {
  const { id } = useParams();

  const singleProduct = products.find((p) => p.id === id);

  if (!singleProduct) {
    return <div>No product found.</div>;
  }

  return <SingleProductContainer product={singleProduct} />;
};

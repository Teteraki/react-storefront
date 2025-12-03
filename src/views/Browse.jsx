import { useParams } from "react-router-dom";
import { BrowseContainer } from "../components/browse/BrowseContainer";

export const Browse = ({ products, loading, error }) => {
  const { gender, category } = useParams();

  return (
    <BrowseContainer
      products={products}
      loading={loading}
      error={error}
      gender={gender}   
      category={category} 
    />
  );
};

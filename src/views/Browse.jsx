import { useParams } from "react-router-dom";
import { BrowseContainer } from "../components/browse/BrowseContainer";

export const Browse = ({ products, loading, error }) => {
  const { gender, category } = useParams();

  return (

    // I can add future components here if I wanted to change the page up a bit.
    <BrowseContainer
      products={products}
      loading={loading}
      error={error}
      gender={gender}   
      category={category} 
    />
  );
};

import { BrowseContainer } from "../components/browse/BrowseContainer";
import { CategoryContainer } from "../components/categories/CategoryContainer";

export const Browse = ({ products, loading, error }) => {
  return (
    <BrowseContainer products={products} loading={loading} error={error} itemsPerPage={16} containerTitle={"Browse Apparel"} />
  );
};


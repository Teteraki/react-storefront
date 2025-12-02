import { BrowseContainer } from "../components/browse/BrowseContainer";

export const Browse = ({ products, loading, error }) => {
  return (
    <BrowseContainer products={products} loading={loading} error={error}  />
  );
};


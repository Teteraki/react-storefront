import { CategoryContainer } from "../components/categories/CategoryContainer";

export const Browse = ({ products, loading, error }) => {
  return (
    <CategoryContainer
      categories={[...new Set(products.map((p) => p.category))]}
    />
  );
};

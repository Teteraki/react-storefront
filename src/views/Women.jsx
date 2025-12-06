import { HeroBanner } from "../components/HeroBanner";
import { CategoryContainer } from "../components/categories/CategoryContainer";

/**
 * Women Page Component
 *
 * A gender-specific landing page showcasing women's apparel. Displays a
 * tailored hero banner followed by a category grid derived from the product
 * dataset.
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full product list used to derive all
 *   available categories for the Women's section.
 */
export const Women = ({ products }) => {
  return (
    <>
      <HeroBanner
        header="Shop the latest fits for her."
        subtext="Flexible, flattering, and fashion-forward — gear that moves with you."
        anchorText="Browse Women’s"
        href="/browse/Womens"
        videoURL="https://cdn.pixabay.com/video/2019/12/30/30703-383980330_large.mp4"
      />
      <CategoryContainer
        gender="Womens"
        categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};

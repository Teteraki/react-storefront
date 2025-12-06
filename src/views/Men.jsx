import { HeroBanner } from "../components/HeroBanner";
import { CategoryContainer } from "../components/categories/CategoryContainer";

/**
 * Men Page Component
 *
 * A gender-specific landing page showcasing men's apparel. Displays a hero
 * banner tailored to the Mens collection and a category grid filtered by
 * available product categories.
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full product list used to derive all
 *   available categories for the Mens section.
 */

export const Men = ({ products }) => {
  return (
    <>
      <HeroBanner
        header="Shop the latest fits for him."
        subtext="Elevated essentials built for style, movement, and the days that push you."
        anchorText="Browse Men’s"
        href="/browse/Mens"
        videoURL="https://cdn.pixabay.com/video/2023/05/15/163117-827112884_large.mp4"
      />
      <CategoryContainer
        gender="Mens"
        categories={[...new Set(products.map((p) => p.category))]}
      />
    </>
  );
};

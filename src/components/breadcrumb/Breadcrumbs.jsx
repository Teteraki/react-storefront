import { Link } from "react-router-dom";
import { BreadCrumbArrow } from "./BreadCrumbArrow";
import { BreadCrumbItem } from "./BreadCrumbItems";

/**
 * Breadcrumbs Component
 *
 * Renders a navigation trail (Home -> Gender -> Category -> Product)
 * for a given product. This improves UX by helping users understand where they
 * are within the store and easily navigate back to broader product listings.
 *
 * @param {Object} props
 * @param {Object} props.product - The product object containing routing info.
 * @param {string} props.product.id - The product's unique identifier.
 * @param {string} props.product.name - Display name of the product.
 * @param {string} props.product.gender - Product gender category (e.g., "Mens", "Womens").
 * @param {string} props.product.category - Product category (e.g., "Shoes", "Hoodies").
 */
export const Breadcrumbs = ({ product }) => {
  // Based on how I implemented filters, I need to do this here as the product.gender is lowercase without the suffix (s).
  const gender =
    product.gender.replace(/s$/, "").charAt(0).toUpperCase() +
    product.gender.replace(/s$/, "").slice(1) +
    "s";
  const category = product.category;

  return (
    <nav aria-label="Breadcrumb ">
      <ol className="flex items-center gap-1 py-4 text-sm text-gray-700">
        <BreadCrumbItem href="/" label="Home" />

        <BreadCrumbArrow />
        <BreadCrumbItem href={`/browse/${gender}`} label={gender} />

        <BreadCrumbArrow />
        <BreadCrumbItem
          href={`/browse/${gender}/${category}`}
          label={category}
        />

        <BreadCrumbArrow />
        <BreadCrumbItem href={`/product/${product.id}`} label={product.name} />
      </ol>
    </nav>
  );
};

import { getCategoryImage } from "../../data/categoryImages";

export const SingleProductImages = ({ product }) => {
  console.log(product, product.category);
  return (
    <div className="block p-8">
      {/* Main image */}
      <div className="w-full">
        <img
          src={getCategoryImage(product.category).image}
          alt={product.name}
          className="h-[350px] w-full object-cover sm:h-[450px] rounded-md"
        />
      </div>

      {/* Product name */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">{product.name}</p>
      </div>

      {/* Hardcoded thumbnails */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <img
          src={getCategoryImage(product.category).image}
          alt="thumb 1"
          className="h-20 w-20 object-cover rounded-md "
        />

        <img
          src={getCategoryImage(product.category).image}
          alt="thumb 2"
          className="h-20 w-20 object-cover rounded-md  "
        />

        <img
          src={getCategoryImage(product.category).image}
          alt="thumb 3"
          className="h-20 w-20 object-cover rounded-md "
        />
      </div>
    </div>
  );
};

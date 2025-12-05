import { Breadcrumbs } from "../navbar/Breadcrumbs";
import { SingleProductImages } from "./SingleProductImages";
import { SingleProductSelections } from "./SingleProductSelections";

export const SingleProductContainer = ({ product }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs product={product} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Product images */}
          <div className="rounded bg-gray-200">
            <SingleProductImages product={product} />
          </div>

          {/* selection items */}
          <div className="rounded bg-gray-200">
            {/* selection content here */}
            <SingleProductSelections product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

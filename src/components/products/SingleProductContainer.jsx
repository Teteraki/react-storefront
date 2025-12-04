import { Breadcrumbs } from "../navbar/Breadcrumbs";

export const SingleProductContainer = ({ product }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          <Breadcrumbs product={product} />
        </header>

        {/* {console.log(product)} */}
      </div>
    </section>
  );
};

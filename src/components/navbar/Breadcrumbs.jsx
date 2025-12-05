import { Link } from "react-router-dom";

export const Breadcrumbs = ({ product }) => {
  // based on how I implemented the filters earlier, it needs to be capitalized here.
  const gender =
    product.gender.replace(/s$/, "").charAt(0).toUpperCase() +
    product.gender.replace(/s$/, "").slice(1) +
    "s";

  const category = product.category;

  return (
    <nav aria-label="Breadcrumb ">
      <ol className="flex items-center gap-1 py-4 text-sm text-gray-700">
        <li>
          <Link to="/" className="block transition-colors hover:text-gray-900">
            Home
          </Link>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/browse/${gender}`}
            className="block transition-colors hover:text-gray-900"
          >
            {gender}
          </Link>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/browse/${gender}/${category}`}
            className="block transition-colors hover:text-gray-900"
          >
            {category}
          </Link>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/product/${product.id}`}
            className="block transition-colors hover:text-gray-900"
          >
            {product.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

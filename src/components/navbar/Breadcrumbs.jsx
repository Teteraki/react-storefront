import { Link } from "react-router-dom";

export const Breadcrumbs = ({ product }) => {
  // based on how I implemented the filters earlier, it needs to be capitalized here.
  const gender =
    product.gender.replace(/s$/, "").charAt(0).toUpperCase() +
    product.gender.replace(/s$/, "").slice(1) +
    "s";

  const category = product.category;

  return (
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center gap-1 text-sm text-gray-700">
        <li>
          <Link to="/" class="block transition-colors hover:text-gray-900">
            Home
          </Link>
        </li>

        <li class="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/browse/${gender}`}
            class="block transition-colors hover:text-gray-900"
          >
            {gender}
          </Link>
        </li>

        <li class="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/browse/${gender}/${category}`}
            class="block transition-colors hover:text-gray-900"
          >
            {category}
          </Link>
        </li>

        <li class="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <Link
            to={`/product/${product.id}`}
            class="block transition-colors hover:text-gray-900"
          >
            {product.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

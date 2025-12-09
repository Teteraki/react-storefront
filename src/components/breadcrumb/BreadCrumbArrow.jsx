/**
 * BreadCrumbArrow Component
 *
 * A small visual separator used between breadcrumb segments.
 * Renders a right-facing chevron icon (`>` shape) inside a `<li>`
 * to match the structure of the breadcrumb list.
 */

export const BreadCrumbArrow = () => {
  return (
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
  );
};

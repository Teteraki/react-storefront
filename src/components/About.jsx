import { CloseButton } from "./toast/CloseButton";

/**
 * About Component (Modal Dialog)
 *
 * A reusable modal component that displays an About/Credits section.
 * The modal is conditionally rendered based on the show prop and includes
 * a close button, scrolling, and overlay dimming.
 */

export const About = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="relative w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <CloseButton show={show} onClose={onClose} />

        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl"
        >
          About / Credits
        </h2>

        <div className="mt-4 space-y-4 text-gray-700 text-sm sm:text-base">
          {/* Assignment Overview */}
          <section>
            <h3 className="font-semibold text-gray-900">Assignment Overview</h3>
            <p className="mt-1">
              This project is a React storefront and sales dashboard built as a
              course assignment. It includes product browsing, filtering,
              cart/checkout functionality, and an analytics dashboard displaying
              sales and profitability metrics through tables and charts.
            </p>
          </section>

          {/* Technologies Used */}
          <section>
            <h3 className="font-semibold text-gray-900">Technologies Used</h3>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Vite</span> – fast development
                server and build tool.
              </li>
              <li>
                <span className="font-medium">React</span> – component-based UI
                framework for building the storefront and dashboard.
              </li>
              <li>
                <span className="font-medium">React Router</span> – SPA routing
                for pages such as Home, Browse, Product Details, and Dashboard.
              </li>
              <li>
                <span className="font-medium">Tailwind CSS</span> – utility CSS
                framework for styling, spacing, and responsive layout.
              </li>
              <li>
                <span className="font-medium">Recharts</span> – chart library
                used for pie charts, bar charts, and data visualizations.
                Documentation:{" "}
                <a
                  href="https://recharts.github.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  https://recharts.github.io/
                </a>
              </li>
              <li>
                <span className="font-medium">Vercel</span> – hosting and
                deployment platform for the final application.
              </li>
            </ul>
          </section>

          {/* UI Component Credits */}
          <section>
            <h3 className="font-semibold text-gray-900">
              UI Component Markup Inspiration
            </h3>
            <p className="mt-1">
              Many UI elements in this project (cards, forms, tables, pills,
              alerts, modals, and dropdowns) are custom-built components created
              using{" "}
              <a
                href="https://www.hyperui.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 hover:underline"
              >
                HyperUI
              </a>{" "}
              as a reference for Tailwind CSS markup patterns. All components
              were rewritten and adapted specifically for this assignment.
            </p>
          </section>

          {/* Data & Image Credits */}
          <section>
            <h3 className="font-semibold text-gray-900">
              Data & Image Credits
            </h3>
            <p className="mt-1">
              Product data, pricing, and sales numbers are fictional sample data
              used solely for coursework and demonstration purposes.
            </p>
            <p className="mt-1">
              Product and banner imagery is sourced from{" "}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 hover:underline"
              >
                Pixabay
              </a>{" "}
              and{" "}
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 hover:underline"
              >
                Unsplash
              </a>{" "}
              under the Pixabay and Unsplash free content license.
            </p>
          </section>

          {/* Developer */}
          <section>
            <h3 className="font-semibold text-gray-900">About the Developer</h3>
            <p className="mt-1">
              This project was designed and developed by{" "}
              <span className="font-medium">Dylan Sanders</span>. It focuses on
              modern front-end development practices, reusable components, and
              data visualization for e-commerce analytics.
            </p>
          </section>

          {/* GitHub */}
          <section>
            <h3 className="font-semibold text-gray-900">Source Code</h3>
            <p className="mt-1">The complete project is available on GitHub:</p>
            <p className="mt-1">
              <a
                href="https://github.com/Teteraki/react-storefront"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 font-medium hover:underline break-all"
              >
                https://github.com/Teteraki/react-storefront
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

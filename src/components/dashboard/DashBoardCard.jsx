/**
 * DashBoardCard Component
 *
 * A reusable layout wrapper used throughout the Sales Dashboard.
 * This component renders a titled card with consistent styling,
 * including rounded borders, padding, and a drop shadow.
 *
 * @param {Object} props
 * @param {string} props.title - The heading shown at the top of the card.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card body.
 */

export const DashBoardCard = ({ title, children }) => (
  <section className="rounded-lg border bg-white p-4 shadow-sm">
    <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
      {title}
    </h2>
    {children}
  </section>
);

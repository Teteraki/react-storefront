/**
 * PageBackButton Component
 *
 * A simple circular back-navigation button used for stepping to a previous
 * view or page within a multi-step flow (e.g., product selection).
 *
 * @param {Object} props
 * @param {Function} props.handlePrev - Callback fired when the button is clicked.
 */

export const PageBackButton = ({ handlePrev }) => {
  return (
    <button
      type="button"
      onClick={handlePrev}
      className="rounded-full bg-teal-600 text-white px-3  text-lg  hover:bg-teal-700"
    >
      ‹
    </button>
  );
};

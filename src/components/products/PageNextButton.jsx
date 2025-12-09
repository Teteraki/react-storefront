/**
 * PageNextButton Component
 *
 * A simple circular next-navigation button used for stepping to the next
 * view or page within a multi-step flow (e.g., product selection).
 *
 * @param {Object} props
 * @param {Function} props.handleNext - Callback fired when the button is clicked.
 */

export const PageNextButton = ({ handleNext }) => {
  return (
    <button
      type="button"
      onClick={handleNext}
      className="rounded-full bg-teal-600 text-white px-3  text-lg  hover:bg-teal-700"
    >
      ›
    </button>
  );
};

/**
 * CloseButton Component
 *
 * A reusable close button used in modal dialogs, toast notifications,
 * and other dismissible UI elements. Displays a small "X" icon and
 * triggers a provided callback when clicked.
 *
 * @param {Object} props
 * @param {Function} props.onClose - Callback fired when the button is clicked.
 */
export const CloseButton = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-600 transition hover:scale-110"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

import { CloseButton } from "./toast/CloseButton";

/**
 * About Component (Modal Dialog)
 *
 * A reusable modal component that displays an About/Credits section.
 * The modal is conditionally rendered based on the show prop and includes
 * a close button, overlay dimming, and proper accessibility attributes.
 *
 * @param {Object} props
 * @param {boolean} props.show - Controls whether the modal is visible.
 * @param {Function} props.onClose - Callback invoked to close the modal.
 *
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
      <div className="relative w-full max-w rounded-lg bg-white p-6 shadow-lg">
        <CloseButton show={show} onClose={onClose} />

        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl"
        >
          About/Credits
        </h2>

        <div className="mt-4">
          <p className="text-pretty text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

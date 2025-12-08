import { CloseButton } from "../toast/CloseButton";

export const AdminInfo = ({ product, show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className=" fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="max-h-150 overflow-y-auto relative w-full max-w rounded-lg bg-white p-6 shadow-lg">
        <CloseButton show={show} onClose={onClose} />

        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl"
        >
          Admin Info
        </h2>

        <div className="mt-4">
          <p className="text-pretty text-gray-700">{product.dom_cost}</p>
        </div>
      </div>
    </div>
  );
};

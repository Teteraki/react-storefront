import { getCategoryImage } from "../../data/categoryImages";
export const CartToastItem = ({ cartItem }) => {
  return (
    <li key={cartItem.id} className="flex items-start gap-4">
      <img
        src={getCategoryImage(cartItem.category).image}
        alt={cartItem.name}
        className="w-16 h-16 rounded-sm object-cover shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-sm text-gray-900 whitespace-normal">
          {cartItem.name}
        </h3>
        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline font-semibold">Size:</dt>
            <dd className="inline ml-1">{cartItem.size || "N/A"}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Color:</dt>
            <dd className="inline ml-1">
              {cartItem.color.length > 0
                ? cartItem.color.map((c) => c.name).join(", ")
                : "N/A"}
            </dd>
          </div>
          <div>
            <dt className="inline font-semibold">Qty:</dt>
            <dd className="inline ml-1">{cartItem.quantity}</dd>
          </div>
        </dl>
      </div>
    </li>
  );
};

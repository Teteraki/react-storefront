//hyper ui card modified
export const ProductCard = ({ product }) => {
  const images = [
    {
      type: "Tops",
      image:
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Bottoms",
      image:
        "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Sweaters",
      image:
        "https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Outerwear",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Dresses",
      image:
        "https://plus.unsplash.com/premium_photo-1673384389447-5a4364e7c93b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Jumpsuits",
      image:
        "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const getCategoryImage = (category) => {
    return images.find((img) => img.type === category) || images[0];
  };
  // types of images based on Tops, Bottoms, Sweaters, Outerwear, Dresses, Jumpsuits

  return (
    <a href="#" className="group block">
      <img
        src={getCategoryImage(product.category).image}
        alt=""
        className="h-[350px] w-full object-cover sm:h-[450px]"
      ></img>

      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs text-pretty text-gray-500">
            {product.description}
          </p>
        </div>

        <p className="text-gray-900">${product.price}</p>
      </div>
    </a>
  );
};

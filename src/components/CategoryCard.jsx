export const CategoryCard = ({ category }) => {
  return (
    <a href="#" className="block">
      <img
        alt={category}
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
        className="rounded-md h-64 w-full object-cover sm:h-80 lg:h-96"
      ></img>

      <h3 className="text-center mt-4 text-lg  text-gray-900 sm:text-xl">
        {category}
      </h3>
    </a>
  );
};

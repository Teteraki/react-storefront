export const HeroBanner = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2016/09/02/12/47/jeans-1639100_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/10/13/14/hands-3667030_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/06/12/27/leather-jacket-6773269_1280.jpg",
  ];

  return (
    <section className="bg-[url('https://cdn.pixabay.com/photo/2021/11/06/12/27/leather-jacket-6773269_1280.jpg')] bg-cover bg-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-46">
          <h1 className="text-3xl font-bold  text-gray-100 sm:text-4xl lg:text-5xl">
            Shop the latest fits.
          </h1>

          <p className="mt-4 max-w-2xl text-gray-100">
            Curated streetwear and essentials for everyday life.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="/browse"
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
              Browse collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

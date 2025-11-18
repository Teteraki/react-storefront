export const HeroBanner = () => {
  return (
    <section className="relative py-10 w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.pixabay.com/video/2024/04/29/209895_large.mp4"
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content (same as your original) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-46">
          <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl lg:text-5xl">
            Shop the latest fits.
          </h1>

          <p className="mt-4 max-w-2xl text-gray-100">
            Curated streetwear and essentials for everyday life.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#browse-categories"
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
              Browse categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

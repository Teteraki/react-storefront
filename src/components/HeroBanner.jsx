export const HeroBanner = ({videoURL, header, subtext, anchorText, href}) => {
  return (
    <section className="relative py-10 w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={videoURL}
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content (same as your original) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-46">
          <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl lg:text-5xl">
            {header}
          </h1>

          <p className="mt-4 max-w-2xl text-gray-100">
            {subtext}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={href}
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
             {anchorText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

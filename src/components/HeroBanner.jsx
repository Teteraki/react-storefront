import { Link } from "react-router-dom";

/**
 * HeroBanner Component (reusable and customizable)
 *
 * @param {Object} props
 * @param {string} props.videoURL - The URL of the hosted background video.
 * @param {string} props.header - The main header text displayed in the center.
 * @param {string} props.subtext - The subtext displayed under the header.
 * @param {string} props.anchorText - The text used for the CTA link button.
 * @param {string} props.href - The URL the CTA button links to.
 *
 * @returns {JSX.Element} A hero banner with a background video, overlay text and a button.
 */
export const HeroBanner = ({videoURL, header, subtext, anchorText, href}) => {
  return (
    <section className="relative py-10 w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={videoURL}
      />

      {/* Main Component Div */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-46">

          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-100 sm:text-4xl lg:text-5xl">
            {header}
          </h1>

          <p className="mt-4 max-w-2xl text-gray-100">
            {subtext}
          </p>

          {/* Link Tag for React Client Side Routing */}
          <div className="mt-6 flex gap-3">
            
            <Link
              to={href} 
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            >
              {anchorText}
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Footer Component
 *
 * Renders the global site footer, including:
 * - The project title and author attribution
 * - A short description of the tech stack used
 * - A list of external links such as GitHub and a personal site. (will break these into smaller components).
 *
 */

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <span className="text-2xl font-bold">Storefront</span>
          <p> by Dylan Sanders</p>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Built with React and Vite for a fast, modern workflow, styled using
          Tailwind CSS and enhanced with components from HyperUI.
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://github.com/Teteraki/react-storefront"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Personal Site</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm7.318 9h-3.478c-.075-2.292-.52-4.39-1.227-6.063A7.52 7.52 0 0 1 19.318 11zm-5.07 0H9.752c.073-2.157.482-4.17 1.133-5.77.265-.65.549-1.19.84-1.6.291.41.575.95.84 1.6.651 1.6 1.06 3.613 1.133 5.77zm-7.566 0h3.478c.075-2.292.52-4.39 1.227-6.063A7.52 7.52 0 0 0 4.682 11zm3.478 2H4.682a7.52 7.52 0 0 0 4.323 6.063c-.707-1.673-1.152-3.771-1.227-6.063zm1.592 0h4.496c-.073 2.157-.482 4.17-1.133 5.77-.265.65-.549 1.19-.84 1.6-.291-.41-.575-.95-.84-1.6-.651-1.6-1.06-3.613-1.133-5.77zm6.07 0h3.478a7.52 7.52 0 0 1-4.323 6.063c.707-1.673 1.152-3.771 1.227-6.063z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

import { NavbarCart } from "./NavbarCart";

const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Browse", href: "/browse" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-">
          <div className="flex h-16 items-center justify-between">
            <a className="block text-teal-600" href="/">
              <div class="flex justify-center text-teal-600">
                <span class="text-2xl font-bold">Storefront </span>
                <p> by Dylan Sanders</p>
              </div>
            </a>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {navbarLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <NavbarCart />
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  href="/login"
                >
                  Login
                </a>
              </div>

              {/* <div className="block md:hidden">
          <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path  d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

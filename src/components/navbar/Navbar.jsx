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
              <div className="flex justify-center text-teal-600">
                <span className="text-2xl font-bold">Storefront </span>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

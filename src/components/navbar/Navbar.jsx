import { NavbarCart } from "./NavbarCart";
import { useAuth } from "../../hooks/AuthContext"; // adjust path as needed
import { Link } from "react-router-dom";
import { LoginOutButton } from "./LoginOutButton";

const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Browse", href: "/browse" },
];

export const Navbar = ({ showAbout }) => {
  const { loggedIn } = useAuth();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link className="block text-teal-600" to="/">
            <div className="flex justify-center text-teal-600">
              <span className="text-2xl font-bold">Storefront&nbsp;</span>
              <p>by Dylan Sanders</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navbarLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <button
                  type="button"
                  onClick={showAbout}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  About
                </button>

                {/* Show when logged in */}
                {loggedIn && (
                  <li key="dashboard">
                    <Link
                      to="/dashboard"
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          {/* Right side: cart + auth button */}
          <div className="flex items-center gap-4">
            <NavbarCart />
            <LoginOutButton />
          </div>
        </div>
      </div>
    </header>
  );
};

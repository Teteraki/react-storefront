import { NavbarCart } from "./NavbarCart";
import { useAuth } from "../../hooks/AuthContext";
import { LoginOutButton } from "./LoginOutButton";
import { NavbarLink } from "./NavbarLink";
import { LogoLink } from "./LogoLink";

// React Router Public Links
const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Browse", href: "/browse" },
];

// Protected Links
const adminLinks = [{ label: "Dashboard", href: "/dashboard" }];

/**
 * Navbar Component
 *
 * Renders the main site navigation bar, including:
 * - Brand logo link (home route).
 * - Primary navigation links (Home, Men, Women, Browse).
 * - About button (triggers an external modal handler).
 * - Admin dashboard link when the user is logged in.
 * - Cart icon and login/logout button on the right side.
 *
 * @param {Object} props
 * @param {Function} props.showAbout - Callback function when the "About" button
 *   is clicked; used to open the About modal dialog.
 */
export const Navbar = ({ showAbout }) => {
  const { loggedIn } = useAuth();

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <LogoLink />

          {/* Desktop Nav, mobile to be finished at later date.*/}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navbarLinks.map((link) => (
                  <NavbarLink key={link.label} link={link} />
                ))}

                {/* About rendered as a button to trigger the modal dialog. */}
                <button
                  type="button"
                  onClick={showAbout}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  About
                </button>

                {/* Show when logged in. */}
                {loggedIn && (
                  <NavbarLink key="Dashboard" link={adminLinks[0]} />
                )}
              </ul>
            </nav>
          </div>

          {/* Right side: cart + auth button. */}
          <div className="flex items-center gap-4">
            <NavbarCart />
            <LoginOutButton />
          </div>
        </div>
      </div>
    </header>
  );
};

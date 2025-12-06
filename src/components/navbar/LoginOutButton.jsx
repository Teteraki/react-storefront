import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";

/**
 * LoginOutButton Component
 *
 * Renders either a "Login" link or a "Logout" button depending on the user's
 * authentication state. This component interfaces with the global AuthContext
 * to determine whether the user is logged in and to perform logout actions.
 */

export const LoginOutButton = () => {
  const { loggedIn, logout } = useAuth();
  return (
    <div className="sm:flex sm:gap-4">
      {loggedIn ? (
        <button
          type="button"
          onClick={logout}
          className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
        >
          Logout
        </button>
      ) : (
        <Link
          className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
          to="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
};

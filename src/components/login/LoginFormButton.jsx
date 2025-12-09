import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

/**
 * LoginFormButton Component
 *
 * A styled button-like link used in the fake login form. When clicked, it
 * triggers the login method from the authentication context and redirects
 * the user to the home page.
 */

export const LoginFormButton = () => {
  const { login } = useAuth();
  return (
    <Link
      onClick={login}
      to="/"
      className="w-full rounded bg-gray-700 px-4 py-2 text-sm text-gray-100 transition hover:bg-gray-600"
    >
      Login
    </Link>
  );
};

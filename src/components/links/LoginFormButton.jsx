import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

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

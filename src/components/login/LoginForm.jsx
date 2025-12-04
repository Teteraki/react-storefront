import { LoginFormButton } from "./LoginFormButton";

export const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Login
        </h2>
        <p>Please note that this is a fake login form.</p>
        <form className="space-y-4">
          {/* EMAIL */}
          <label htmlFor="email" className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              id="email"
              className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
              placeholder="you@example.com"
            />
          </label>

          {/* PASSWORD */}
          <label htmlFor="password" className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              id="password"
              className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
              placeholder="••••••••"
            />
          </label>

          <LoginFormButton />
        </form>
      </div>
    </div>
  );
};

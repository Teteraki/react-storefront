import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/**
 * Application Entry Point
 *
 * Bootstraps the React application by creating the root render target and
 * inserting the top-level <App /> component into the DOM. Wraps the entire
 * application in React Router’s <BrowserRouter> to enable client-side routing.
 */

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignUpPage.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { DashboardPage } from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      {
        path:"dashboard",element:<DashboardPage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider> 
  </StrictMode>
);

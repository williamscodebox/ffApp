import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import { ValueProvider } from "./providers/ValueContext.jsx";

// Auth

//Restricted
import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";
import Overview from "./pages/Auth/Overview.jsx";
import Menu from "./pages/Auth/Menu.jsx";
import Week from "./pages/Auth/Week.jsx";

// Admin
import AdminRoute from "./pages/Auth/AdminRoute.jsx";
import Admin from "./pages/User/Admin/Admin.jsx";
import AdminWeek from "./pages/User/Admin/AdminWeek";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/week" element={<Week />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminWeek" element={<AdminWeek />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ValueProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ValueProvider>
);

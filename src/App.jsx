import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
const About = React.lazy(() => import("./pages/About"));
const Country = React.lazy(() => import("./pages/Country"));
const Contact = React.lazy(() => import("./pages/Contact"));
const CountryDetails = React.lazy(() => import("./components/Layout/CountryDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          // Suspense is used to handle the loading state of the lazy-loaded component something like a spinner or loading text
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/country",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Country />
          </Suspense>
        ),
      },
      {
        path: "/country/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CountryDetails />
          </Suspense>
        ),

      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

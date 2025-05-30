import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error, "Error from  hook");

  return (
    <>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error && <p>{error.data}</p>}</p>
        {/* Navlink is an internal feature of router on click of which we can redirect back user to any page OR correct page */}
        <NavLink to={'/'}> <button>Go Home </button> </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;

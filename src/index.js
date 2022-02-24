import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zuutqimo.us.auth0.com"
    clientId="UlDwxK4DVLn90gqh5Km9bXYhi0nEVJdL"
    redirectUri={`${window.location.origin}/home`}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

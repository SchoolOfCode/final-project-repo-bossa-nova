import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App/App.js";
import { Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zuutqimo.us.auth0.com"
    clientId="UlDwxK4DVLn90gqh5Km9bXYhi0nEVJdL"
    redirectUri={`${window.location.origin}/home`}
  >
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

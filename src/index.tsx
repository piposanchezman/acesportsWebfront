import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Auth0Provider
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
    domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: "openid profile email",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";
import { OIDC_CONFIG } from "./utils/config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider {...OIDC_CONFIG} onSigninCallback={(user) => console.log(user)}>
    <App />
  </AuthProvider>
);

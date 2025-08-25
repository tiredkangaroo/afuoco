import { useEffect } from "react";
import { OAuthConfig } from "../types";

var config = new OAuthConfig({
  clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  authURL: import.meta.env.VITE_GOOGLE_AUTH_URL,
  tokenURL: import.meta.env.VITE_GOOGLE_TOKEN_URL,
  redirectURL: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
  scopes: import.meta.env.VITE_GOOGLE_SCOPES.split(","),
});

export function TasksView() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center border-1 border-black">
      <h2>Tasks</h2>
    </div>
  );
}

export function handleGoogleCallback() {}

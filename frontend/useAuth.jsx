import React, { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export default function useAuth({ code }) {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    // API Access Token
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        // eslint-disable-next-line prefer-template
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch(TOKEN_ENDPOINT, authParameters)
      .then((res) => res.json())
      // eslint-disable-next-line no-restricted-syntax
      .then((info) => setAccessToken(info.access_token))
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);
}

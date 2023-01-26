export const IDENTITY_CONFIG = {
  authority: import.meta.env.VITE_AUTH_URI || "", //(string): The URL of the OIDC
  client_id: import.meta.env.VITE_IDENTITY_CLIENT_ID || "", //(string): Your client
  response_type: import.meta.env.VITE_RESPONSE_TYPE || "", //(string: can be "code" or "token id_token"/"id_token token")
  scope: import.meta.env.VITE_SCOPE || "", //(string): defines what's included in the ID token. Either "openid profile", "openid email" or "openid profile email". Can also include more scopes
};

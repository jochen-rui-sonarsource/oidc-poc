export const OIDC_CONFIG = {
  authority: import.meta.env.VITE_AUTH_URI || "", //(string): The URL of the OIDC
  client_id: import.meta.env.VITE_IDENTITY_CLIENT_ID || "", //(string): Your client
  client_secret: import.meta.env.VITE_IDENTITY_CLIENT_SECRET || "", //(string): Your client secret
  response_type: import.meta.env.VITE_RESPONSE_TYPE || "", //(string: can be "code" or "token id_token"/"id_token token")
  scope: import.meta.env.VITE_SCOPE || "", //(string): defines what's included in the ID token. Either "openid profile", "openid email" or "openid profile email". Can also include more scopes
  redirect_uri: import.meta.env.VITE_REDIRECT_URI || "", //(string): The URL to redirect the user to after authentication
  metadata: {
    authorization_endpoint: import.meta.env.VITE_AUTHORIZATION_ENDPOINT || "", //(string):
    token_endpoint: import.meta.env.VITE_TOKEN_ENDPOINT || "", //(string):
    issuer: import.meta.env.VITE_AUTH_URI || "", //(string): The URL of the OIDC
    userinfo_endpoint: import.meta.env.VITE_USERINFO_ENDPOINT,
    end_session_endpoint: import.meta.env.VITE_END_SESSION_ENDPOINT || "", //(string):
  },
};

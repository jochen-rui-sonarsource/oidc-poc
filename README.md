# JumpCloud OIDC POC

## 1. About the project

This project is a POC for the integration of JumpCloud OIDC into a frontend application written in ReactJS.

## 2. Getting Started

### 2.1 ENV Setup

- Create a .env file in frontend -> ./frontend/.env
- fill it in with the Client ID and Client Secret from JumpCloud
- fill in your Redirect URI

```sh
VITE_IDENTITY_CLIENT_ID='JumpCloud Client ID'
VITE_IDENTITY_CLIENT_SECRET='JumpCloud Client Secret'
VITE_AUTH_URI='https://oauth.id.jumpcloud.com'
VITE_RESPONSE_TYPE='code'
VITE_SCOPE='openid'
VITE_REDIRECT_URI='your redirect URI'
VITE_AUTHORIZATION_ENDPOINT='https://oauth.id.jumpcloud.com/oauth2/auth'
VITE_USERINFO_ENDPOINT='https://oauth.id.jumpcloud.com/userinfo'
VITE_END_SESSION_ENDPOINT='https://oauth.id.jumpcloud.com/oauth2/sessions/logout'
VITE_TOKEN_ENDPOINT='https://oauth.id.jumpcloud.com/oauth2/token'
VITE_PORT=3000
```

### 2.2 Installation

1. Go into the /frontend directory
2. Install the dependencies with yarn or npm

```sh
    npm install

    or

    yarn install
```

### 2.3 Run locally

1. Go into the /frontend directory
2. Run the application using the provided script

```sh
    npm run dev
```

## 3. Contact

For any questions reach out to

- Jochen Rui <jochen.rui@sonarsource.com>
- Eric Hirle <eric.hirlemann@sonarsource.com>

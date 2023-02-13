import { useAuth } from "react-oidc-context";
import "./App.css";

function App() {
  const auth = useAuth();
  console.log(import.meta.env);

  const getAuthenticationState = () => {
    switch (auth.activeNavigator) {
      case "signinSilent":
        return <div>Signing you in...</div>;
      case "signinRedirect":
        return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
      return <div>Loading...</div>;
    }

    if (auth.error) {
      return <div>Error: {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
      return (
        <div>
          Hello {auth.user?.profile.sub}{" "}
          <button onClick={() => void auth.removeUser()}>Sign out</button>
        </div>
      );
    }

    return <button onClick={() => void auth.signinRedirect()}>Sign in</button>;
  };

  return (
    <div className="App">
      <div>
        <h1>Sample OIDC App</h1>
        {getAuthenticationState()}
      </div>
    </div>
  );
}

export default App;

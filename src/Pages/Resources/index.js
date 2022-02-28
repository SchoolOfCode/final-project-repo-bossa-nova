import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Resources() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated ? (
    <>
      <nav>
        <Link to="/add-new">Add new</Link>
        <Link to="/home">Home</Link>
        <Link to="/update">Update</Link>
      </nav>
      <main>
        <h2>Welcome to the resources!</h2>
      </main>
      <Profile />
      <LogoutButton />
      <Card link={"www.google.com"} />
      <Card link={"https://www.npmjs.com/"} />
      <Card link={"https://developer.mozilla.org/en-US/"} />
    </>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

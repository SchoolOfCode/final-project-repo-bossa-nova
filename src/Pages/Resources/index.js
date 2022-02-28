import { useEffect, useState } from "react";
import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import { nanoid } from "nanoid";

export default function Resources() {
  const URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchResources() {
      const response = await fetch(`${URL}/api/resources`);
      const data = await response.json();
      setData(data);
    }
    fetchResources();
  }, [URL]);

  console.log(data);

  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

return (
    <HeroContainer title={"Resources"}>
      {" "}
      {isAuthenticated ? (
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
            {data &&
            data.map((resource) => {
              return <Card key={nanoid()} link={resource.link} />;
            })}
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

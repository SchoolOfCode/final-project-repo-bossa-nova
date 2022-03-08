import { useEffect, useState } from "react";
import Card from "../../Components/Card";
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
          <div className="grid  md:grid-cols-2 xl:grid-cols-3 justify-items-center ">
            {data &&
              data.payload.map((resource) => {
                return <Card key={nanoid()} link={resource.link} />;
              })}
          </div>
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

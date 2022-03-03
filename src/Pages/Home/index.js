import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import StickyHeadTable from "../../Components/Table";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Home() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  return (
    <HeroContainer title={"My jobs application"}>
      {isAuthenticated ? (
        <>
          <nav>
            <Link to="/add-new" className="newJobButton">
              Add new job
            </Link>
            <Link to="/resources">Resources</Link>
            <Link to="/update">Update</Link>
          </nav>
          <main>
            <h2>Welcome to the homepage!</h2>
          </main>
          {/*  <Profile /> */}
          <LogoutButton />
          <StickyHeadTable />
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

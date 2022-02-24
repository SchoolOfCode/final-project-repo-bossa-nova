import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/add-new">Add new</Link>
      </nav>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <Profile />
      <LogoutButton />
    </>
  );
}

import Profile from "../../Components/Profile";
import LogoutButon from "../../Components/LogoutButton";

export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <Profile />
      <LogoutButon />
    </>
  );
}

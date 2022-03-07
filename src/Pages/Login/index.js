import LoginButton from "../../Components/LoginButton";

import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log in"}>
      <main>
        <div>
          <img className="hidden md:block" src="logo-01.png" />
          <img className="hidden md:block" src="login-image.png" />
          <h2 className="md:hidden">Track Your Jobs</h2>
          <h2 className="hidden md:block text-loginDesktop">Track</h2>
          <h2 className="hidden md:block text-loginDesktop">Your</h2>
          <h2 className="hidden md:block text-loginDesktop">Job</h2>
          <p>
            Bossa Nova job tracker is an easy way to organise your job
            applications.
          </p>
          <p>No more using speadsheets or email</p>
          <h3>Applications</h3>
          <LoginButton />
        </div>
      </main>
    </HeroContainer>
  );
}

import LoginButton from "../../Components/LoginButton";

import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log in"}>
      <main>
        <div className="relative h-[73.6vh]">
          <img
            className="absolute z-10 top-10 right-10 hidden md:block"
            src="logo-01.png"
            alt="logo"
          />
          <div className="absolute hidden md:block">
            <img
              className=" z-10  object-cover h-[400px]"
              src="login-image.png"
              alt="login"
            />
            <div className="z-30 h-[400px] w-[301px]  left-40 top-40 rounded-lg p-8 bg-coral">
              <h4>ABOUT</h4>
              <br />
              <p>
                Bossa Nova job tracker is an easy way to organise your job
                applications.
              </p>
              <br />
              <p>No more using speadsheets or email</p>
            </div>
          </div>
          <h2 className="md:hidden">Tracker Your Jobs</h2>
          <div className="absolute z-40 hidden md:block text-loginDesktop ml-16 mt-10">
            <h2 className="">Tracker</h2>
            <h2 className=" ml-40">Your</h2>
            <h2 className=" ml-80">Jobs</h2>
          </div>
          <div className="md:hidden">
            <h4>ABOUT</h4>
            <br />
            <p>
              Bossa Nova job tracker is an easy way to organise your job
              applications.
            </p>
            <br />
            <p>No more using speadsheets or email</p>
          </div>
          <div className="absolute right-10 bottom-10">
            <h3>Applications</h3>
            <LoginButton />
          </div>
        </div>
      </main>
    </HeroContainer>
  );
}

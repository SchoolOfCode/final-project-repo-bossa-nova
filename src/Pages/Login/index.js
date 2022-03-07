import LoginButton from "../../Components/LoginButton";

import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log in"}>
      <main>
        <div className="relative h-[73.6vh] flex justify-center">
          <div className="absolute hidden md:block top-[4rem]">
            <div className=" flex">
              <img
                className=" z-10  object-cover h-[400px]"
                src="login-image.png"
                alt="login"
              />
              <div className="z-20  h-[400px] w-[301px] -ml-40 mt-40 rounded-lg p-8  bg-coral">
                <h4>ABOUT</h4>
                <br />
                <p>
                  Bossa Nova job tracker is an easy way to organise your job
                  applications.
                </p>
                <br />
                <p>No more using speadsheets or email</p>
              </div>
              <img
                className="h-[172px] z-100 -mr-4 "
                src="logo-01.png"
                alt="logo"
              />
            </div>
          </div>
          <h2 className="md:hidden">Tracker Your Jobs</h2>
          <div className="absolute z-40 hidden md:block text-loginDesktop ml-16 mt-[6rem] font-semibold">
            <h2 className="">Tracker</h2>
            <h2 className=" ml-[13rem] -mt-5">Your</h2>
            <h2 className=" ml-80 -mt-5">Jobs</h2>
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
            <h3 className="text-desktopHeroHeading">Applications</h3>
            <LoginButton />
          </div>
        </div>
      </main>
    </HeroContainer>
  );
}

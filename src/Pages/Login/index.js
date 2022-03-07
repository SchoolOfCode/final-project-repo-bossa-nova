import LoginButton from "../../Components/LoginButton";

import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log in"}>
      <main>
        <div className="relative h-[73.6vh] flex justify-center">
          <div className=" hidden md:block mt-[3.3rem]">
            <div className=" flex">
              <img
                className=" z-10  object-cover h-[350px]"
                src="login-image.png"
                alt="login"
              />
              <div className="z-20  h-[350px] w-[262px] -ml-40 mt-40   rounded-lg px-8 pt-12 shadow-sm bg-white bg-opacity-80">
                <h4 className="font-bold">ABOUT</h4>
                <br />
                <p>
                  Bossa Nova job tracker is an easy way to organise your job
                  applications.
                </p>
                <br />
                <p>No more using speadsheets or email</p>
              </div>
              <div className="w-[10vw] logl" />
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
          <div className="absolute z-40 logl:right-[4rem] right-[2rem] bottom-[9rem]">
            <h3 className="text-loginApplications">Applications</h3>
            <LoginButton />
          </div>
        </div>
      </main>
    </HeroContainer>
  );
}

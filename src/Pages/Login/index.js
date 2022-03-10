import LoginButton from "../../Components/LoginButton";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log In"}>
      <main>
        <div className="flex pb-5 ">
          <div className="flex text-center justify-center w-[50%] font-bold pt-5 dark:text-white">
            <div className="flex-col self-center">
              <div className="space-y-[-1.1rem]">
                <p className="text-loginDesktop">Tracker</p>
                <p className="text-loginDesktop">Your</p>
                <p className="text-loginDesktop">Jobs</p>
              </div>
              <p className="text-loginApplications">Applications</p>
            </div>
          </div>
          <div className="flex justify-center w-[50%] pt-5">
            <img
              src="login-image.png"
              alt={"job seeker"}
              className="h-[300px] w-[240px]"
            />
            <div className="z-20  h-[300px] w-[240px] -ml-40 mt-40 rounded-lg px-2 pt-12 shadow-sm bg-white dark:bg-darkBlockHome bg-opacity-80 text-left">
              <h4 className="font-bold">ABOUT</h4>
              <br />
              <p>
                Bossa Nova job tracker is an easy way to organize your job
                applications.
              </p>
              <br />
              <p>No more using spreadsheets or email</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4  ">
          <LoginButton />
        </div>
      </main>
    </HeroContainer>
  );
}

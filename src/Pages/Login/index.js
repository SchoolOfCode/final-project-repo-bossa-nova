import LoginButton from "../../Components/LoginButton";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log In"}>
      <main>
        <div className="flex pb-5 md:text-mobileBody ">
          <div className="flex text-center justify-center w-[100%] md:w-[50%] lg:w-[50%] pt-5 dark:text-white">
            <div className="flex-col md:text-mobileBody self-center  ">
              <div className="md:space-y-[-1.1rem] lg:space-y-[-1.1rem] font-bold">
                <p className="text-loginApplications md:text-loginDesktop lg:text-loginDesktop">
                  Job
                  <p className="text-loginApplications md:text-loginApplications lg:text-loginApplications font-bold">
                    Application
                  </p>
                </p>
                <p className="text-loginApplications md:text-loginDesktop lg:text-loginDesktop pb-2">
                  Tracker
                </p>
              </div>

              <div className="md:hidden lg:hidden z-20 h-[250px] w-[300px] rounded-lg px-2 pt-12 shadow-sm bg-white dark:bg-darkBlockHome bg-opacity-80 text-center">
                <h4 className="font-bold text-mobileSidebar">ABOUT</h4>
                <br />
                <p className="text-mobileSidebar md:text-mobileSidebar lg:text-mobileSidebar">
                  Bossa Nova job tracker is an easy way to organize your job
                  applications.
                </p>
                <br />
                <p className="text-mobileSidebar md:text-mobileSidebar lg:text-mobileSidebar">
                  No more using spreadsheets or email.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex lg:flex justify-center w-[50%] pt-5">
            <img
              src="login-image.png"
              alt={"job seeker"}
              className="h-[300px] w-[240px] hidden md:block lg:block"
            />
            <div className="z-20 md:block lg:block h-[300px] w-[240px] -ml-40 mt-40 rounded-lg px-2 pt-12 shadow-sm bg-white dark:bg-darkBlockHome bg-opacity-80 text-center">
              <h4 className="font-bold text-mobileSidebar">ABOUT</h4>
              <br />
              <p className="text-mobileSidebar md:text-mobileSidebar lg:text-mobileSidebar">
                Bossa Nova job tracker is an easy way to organize your job
                applications.
              </p>
              <br />
              <p className="text-mobileSidebar md:text-mobileSidebar lg:text-mobileSidebar">
                No more using spreadsheets or email.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4  ">
          <LoginButton btn="startTodayButton" text={"Start today"} />
        </div>
      </main>
    </HeroContainer>
  );
}

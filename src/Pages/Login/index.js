import LoginButton from "../../Components/LoginButton";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

export default function Login() {
  return (
    <HeroContainer title={"Please Log In"}>
      <main>
        <div className="flex justify-center">
          <div className="flex-col item-center w-[50%]">
            <h1>Tracker</h1>
            <h1>Your</h1>
            <h1>Jobs</h1>
            <h2>Applications</h2>
          </div>
          <div className="flex w-[50%]">
            <img
              src="login-image.png"
              alt={"job seeker"}
              className="h-[350px]"
            />
            <div className="z-20  h-[350px] w-[262px] -ml-40 mt-40   rounded-lg px-8 pt-12 shadow-sm bg-white dark:bg-darkBlockHome bg-opacity-80">
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
        <div className="  ">
          <LoginButton />
        </div>
      </main>
    </HeroContainer>
  );
}

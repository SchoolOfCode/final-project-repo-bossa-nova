import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      btn="startTodayButton"
      text="Start today"
      handleClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;

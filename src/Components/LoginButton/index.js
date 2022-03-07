import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      btn="negativeButton"
      text="Log in"
      onClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;

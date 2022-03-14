import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

const LoginButton = ({ btn, text }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button btn={btn} text={text} handleClick={() => loginWithRedirect()} />
  );
};

export default LoginButton;

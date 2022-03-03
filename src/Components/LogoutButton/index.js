import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({className, text}) => {
  const { logout } = useAuth0();

  return (
    <button className={className} onClick={() => logout({ returnTo: window.location.origin })}>
      {text}
    </button>
  );
};

export default LogoutButton;

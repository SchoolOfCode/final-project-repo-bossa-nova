import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Input from "../../Components/Input";
import React, { useReducer } from "react";

const initialValues = {
  jobTitle: "",
  company: "",
  salary: "",
  jobStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}

export default function AddNew() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  function callDispatch(e, key) {
    dispatch({
      type: "update_input",
      value: e.target.value,
      key: key,
    });
  }

  console.log(state);

  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated ? (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/update">Update</Link>
      </nav>
      <main>
        <h2>Welcome to the add new page!</h2>
      </main>
      <Profile />
      <LogoutButton />
      <form>
        <Input
          labelText={"Job Title"}
          type={"text"}
          name={"jobTitle"}
          value={state.value}
          update={(e) => callDispatch(e, "jobTitle")}
        />
        <Input
          labelText={"Company"}
          type={"text"}
          name={"company"}
          value={state.value}
          update={(e) => callDispatch(e, "company")}
        />
        <Input
          labelText={"Salary"}
          type={"text"}
          name={"salary"}
          value={state.value}
          update={(e) => callDispatch(e, "salary")}
        />
        <Input
          labelText={"Job Status"}
          type={"text"}
          name={"jobStatus"}
          value={state.value}
          update={(e) => callDispatch(e, "jobStatus")}
        />
      </form>
    </>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

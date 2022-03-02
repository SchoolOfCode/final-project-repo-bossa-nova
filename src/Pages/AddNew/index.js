import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Input from "../../Components/Input";
import React, { useReducer } from "react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";

// This is the object that the useReducer is using as initial state
const initialValues = {
  jobTitle: "",
  company: "",
  salary: "",
  jobStatus: "",
};

// This is the function trigged by the dispatch function that is
// nested in callDispatch function (line 38)
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
  // YOUTUBE VIDEO ABOUT useReducer: https://www.youtube.com/watch?v=0_P4dspmSA0&t=654s
  const [state, dispatch] = useReducer(reducer, initialValues);

  //callDispatch is being called in each Input component
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

  return (
    <HeroContainer title={"Please add a new job!"}>
      {isAuthenticated ? (
        <>
          {/* <nav>
            <Link to="/home">Home</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/update">Update</Link>
          </nav> */}
          {/* <main className="">
            <h2>Welcome to the add new page!</h2>
          </main> */}
          {/* <Profile />
          <LogoutButton /> */}
          <form className="">
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
      )}
    </HeroContainer>
  );
}

import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Input from "../../Components/Input";
import React, { useReducer } from "react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import Select from "../../Components/Select";
import Button from "../../Components/Button";

// This is the object that the useReducer is using as initial state
const initialValues = {
  jobTitle: "",
  company: "",
  minSalary: "",
  maxSalary: "",
  jobStatus: "waiting",
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

  const { isLoading, isAuthenticated, logout, user } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  const navigate = useNavigate();

  //------- form validation -------//
  function validateForm(min, max, jobTitle, company) {
    if (min > 0 && max > min && jobTitle !== "" && company !== "") {
      return true;
    }
    return false;
  }

  const URL = process.env.REACT_APP_API_URL;
  async function handlePostRequest() {
    if (
      validateForm(
        state.minSalary,
        state.maxSalary,
        state.jobTitle,
        state.company
      )
    ) {
      const response = await fetch(`${URL}/api/user/${user.sub}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      navigate("/home");
      alert("job created");
      return await response.json();
    } else {
      alert("invalid input");
    }
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
          <form className="flex flex-col md:px-40">
            <Input
              labelText={"Job Title"}
              type={"text"}
              name={"jobTitle"}
              value={state.jobTitle}
              update={(e) => callDispatch(e, "jobTitle")}
            />
            <Input
              labelText={"Company"}
              type={"text"}
              name={"company"}
              value={state.company}
              update={(e) => callDispatch(e, "company")}
            />
            <Input
              labelText={"Min Salary"}
              type={"number"}
              name={"minSalary"}
              value={state.minSalary}
              update={(e) => callDispatch(e, "minSalary")}
            />
            <Input
              labelText={"Max Salary"}
              type={"number"}
              name={"maxSalary"}
              value={state.maxSalary}
              update={(e) => callDispatch(e, "maxSalary")}
            />
            <Select
              value={state.jobStatus}
              update={(e) => callDispatch(e, "jobStatus")}
            />
          </form>
          <div className="flex justify-center pt-3">
            <Button
              btn="positiveButton"
              text="Save"
              handleClick={handlePostRequest}
            />
            <Button
              btn="negativeButton"
              text="Cancel"
              handleClick={() => navigate("/home")}
            />
          </div>
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

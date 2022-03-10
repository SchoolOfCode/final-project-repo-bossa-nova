
// import Profile from "../../Components/Profile";
// import LogoutButton from "../../Components/LogoutButton";


import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import Input from "../../Components/Input";
import React, { useReducer } from "react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import { useAlert } from "react-alert";

// This is the object that the useReducer is using as initial state
const initialValues = {
  jobTitle: "",
  company: "",
  minSalary: "",
  maxSalary: "",
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
  const alert = useAlert();
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
  function validateForm(min, max, jobTitle, company, jobStatus) {
    if (jobTitle === "") {
      alert.show(
        <div className="w-[200px] sm:w-[400px]">Please type a Job Title</div>,
        {
          title: "Error",
        }
      );
      return false;
    } else if (company === "") {
      alert.show("Please type a Company Name", {
        title: "Error",
      });
      return false;
    } else if (min < 0) {
      alert.show("Please type a Min Salary greater than 0", {
        title: "Error",
      });
      return false;
    } else if (min >= max) {
      alert.show("Please type a Max Salary that is greater than Min Salary", {
        title: "Error",
      });
      return false;
    } else if (jobStatus === "") {
      alert.show("Please select a job status", {
        title: "Error",
      });
      return false;
    } else {
      return true;
    }
  }

  const URL = process.env.REACT_APP_API_URL;
  async function handlePostRequest() {
    if (
      validateForm(
        state.minSalary,
        state.maxSalary,
        state.jobTitle,
        state.company,
        state.jobStatus
      )
    ) {
      const response = await fetch(`${URL}/api/user/${user.sub}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      navigate("/home");
      alert.show(<div className="w-[200px] sm:w-[400px]">Job created</div>, {
        title: "Success",
      });
      return await response.json();
    }
  }

  // style={{ width: "400px", maxWidth: "200px" }}

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
          <form className="flex flex-col md:px-24 lg:px-32">
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

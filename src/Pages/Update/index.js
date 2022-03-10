import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import TextArea from "../../Components/Textarea";
import { useEffect, useReducer } from "react";
import { useAlert } from "react-alert";

const initialValues = {};

function reducer(state, action) {
  switch (action.type) {
    case "set_initialState":
      return { ...action.value };
    case "update_input":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}

export default function Update() {
  const alert = useAlert();
  const { isLoading, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const params = useParams();
  const { user_id, job_id } = params;
  const URL = process.env.REACT_APP_API_URL;

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/api/user/${user_id}/${job_id}`);
      const data = await response.json();
      dispatch({ type: "set_initialState", value: data.payload[0] });
    }
    fetchData();
  }, [URL, user_id, job_id]);

  function callDispatch(e, key) {
    dispatch({
      type: "update_input",
      value: e.target.value,
      key: key,
    });
  }

  function validateForm(min, max, jobTitle, company, jobStatus) {
    if (jobTitle === "") {
      alert.show(
        <div className="w-[200px] sm:w-[400px]">"Please type a Job Title"</div>,
        {
          title: "Success",
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

  async function handlePutRequest() {
    if (
      validateForm(
        state.minSalary,
        state.maxSalary,
        state.jobTitle,
        state.company,
        state.jobStatus
      )
    ) {
      const response = await fetch(`${URL}/api/user/${user_id}/${job_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      navigate("/home");
      alert.show(<div className="w-[200px] sm:w-[400px]">Job edited</div>, {
        title: "Success",
      });
      return await response.json();
    }
  }

  return (
    <HeroContainer
      title={`${state.jobTitle} @ ${state.company}` || "Loading..."}
    >
      {" "}
      {isAuthenticated ? (
        <>
          {state.jobStatus && (
            <>
              <form className="flex flex-col  md:flex-row  ">
                <div className="flex flex-col w-full md:w-1/3 px-2">
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
                  <TextArea
                    maxlength={1000}
                    labelText={"Job Description"}
                    name={"jobDescription"}
                    value={state.jobDescription}
                    update={(e) => callDispatch(e, "jobDescription")}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/3 px-2">
                  <Input
                    labelText={"Tech Stack"}
                    type={"text"}
                    name={"techStack"}
                    value={state.techStack}
                    update={(e) => callDispatch(e, "techStack")}
                  />
                  <Input
                    labelText={"Contact"}
                    type={"text"}
                    name={"contact"}
                    value={state.contact}
                    update={(e) => callDispatch(e, "contact")}
                  />
                  <Input
                    labelText={"URL link"}
                    type={"url"}
                    name={"urlLink"}
                    value={state.urlLink}
                    update={(e) => callDispatch(e, "urlLink")}
                  />
                  <Input
                    labelText={"Location"}
                    type={"text"}
                    name={"location"}
                    value={state.location}
                    update={(e) => callDispatch(e, "location")}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/3 px-2">
                  <Input
                    labelText={"Application Deadline"}
                    type={"text"}
                    name={"applicationDeadline"}
                    value={state.applicationDeadline}
                    update={(e) => callDispatch(e, "applicationDeadline")}
                  />
                  <Input
                    labelText={"Interview Date"}
                    type={"text"}
                    name={"interviewDate"}
                    value={state.interviewDate}
                    update={(e) => callDispatch(e, "interviewDate")}
                  />

                  <TextArea
                    maxlength={2000}
                    labelText={"Notes"}
                    name={"notes"}
                    value={state.notes}
                    update={(e) => callDispatch(e, "notes")}
                  />
                  <Select
                    value={state.jobStatus}
                    update={(e) => callDispatch(e, "jobStatus")}
                  />
                </div>
              </form>
              <div className="flex justify-center pt-3">
                <Button
                  btn="positiveButton"
                  text="Save"
                  handleClick={handlePutRequest}
                />
                <Button
                  btn="negativeButton"
                  text="Cancel"
                  handleClick={() => navigate("/home")}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

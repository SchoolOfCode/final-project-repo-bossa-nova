import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import { useParams } from "react-router-dom";
import Input from "../../Components/Input";
// import Select from "../../Components/Select";
import { useEffect, useState } from "react";

export default function Update() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  const params = useParams();

  // params from query string

  const { user_id, job_id } = params;

  //Fetch the data
  const [initialState, setInitialState] = useState(null);

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/api/user/${user_id}/${job_id}`);
      const data = await response.json();
      setInitialState(data.payload[0]);
    }
    fetchData();
  }, [URL, user_id, job_id]);

  console.log(initialState);

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  return (
    <HeroContainer title={"job to be updated"}>
      {" "}
      {isAuthenticated ? (
        <>
          <nav>
            <Link to="/add-new">Add new</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/update">Home</Link>
          </nav>
          <main>
            <h2>Welcome to the update page!</h2>
          </main>
          <Profile />
          <LogoutButton />
          <form>
            <Input
              labelText={"Job Title"}
              type={"text"}
              name={"jobTitle"}
              // value={state.jobTitle}
              // update={(e) => callDispatch(e, "jobTitle")}
            />
            <Input
              labelText={"Company"}
              type={"text"}
              name={"company"}
              // value={state.company}
              // update={(e) => callDispatch(e, "company")}
            />
            <Input
              labelText={"Min Salary"}
              type={"text"}
              name={"minSalary"}
              // value={state.minSalary}
              // update={(e) => callDispatch(e, "minSalary")}
            />
            <Input
              labelText={"Max Salary"}
              type={"text"}
              name={"maxSalary"}
              // value={state.maxSalary}
              // update={(e) => callDispatch(e, "maxSalary")}
            />
            {/* <Select
              value={state.jobStatus}
              update={(e) => callDispatch(e, "jobStatus")}
            /> */}
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

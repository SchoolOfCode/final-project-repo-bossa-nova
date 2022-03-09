import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import StickyHeadTable from "../../Components/Table";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import SelectFilter from "../../Components/SelectFilter";

function createData({
  jobTitle,
  company,
  jobStatus,
  minSalary,
  maxSalary,
  _id,
}) {
  const salary = `£${minSalary} - £${maxSalary}`;
  return { jobTitle, company, salary, jobStatus, _id };
}

export default function Home() {
  const { user, isLoading, isAuthenticated, logout } = useAuth0();
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("all");

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/api/user/${user.sub}`);
      if (response.status < 300) {
        const data = await response.json();
        const mappedData = data.payload[0].jobs.map((job) => createData(job));
        const filteredData = filterByStatus(mappedData, filter);
        setData(filteredData);
      } else {
        return;
      }
    }
    if (user) {
      fetchData();
    }
  }, [URL, user, filter]);

  function filterByStatus(data, filter) {
    return data.filter((job) => {
      if (filter !== "all") {
        return job.jobStatus === filter;
      } else {
        return job;
      }
    });
  }

  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <HeroContainer title={"List of my job applications"}>
      {isAuthenticated ? (
        <>
          <div>
            <SelectFilter
              value={filter}
              labelText="Filter by status:"
              name="filter-status"
              update={(e) => handleChange(e)}
              options={[
                "All",
                "Wishlist",
                "Applied",
                "Interview",
                "Offer",
                "Accepted",
                "Rejected",
              ]}
            />
          </div>

          <div className="mb-6 flex justify-end">
            <Link to="/add-new" className="newJobButton">
              Add new job
            </Link>
          </div>
          <StickyHeadTable data={data} />
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

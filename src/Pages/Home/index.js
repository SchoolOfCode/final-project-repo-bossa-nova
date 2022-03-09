import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import StickyHeadTable from "../../Components/Table";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import { useState, useEffect } from "react";

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
  const [filter, setFilter] = useState(null);

  useEffect(() => setFilter("applied"), []);

  const URL = process.env.REACT_APP_API_URL;

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/api/user/${user.sub}`);
      if (response.status < 300) {
        const data = await response.json();
        const mappedData = data.payload[0].jobs.map((job) => createData(job));
        const filteredData = mappedData.filter(
          (job) => job.jobStatus === filter
        );
        setData(filteredData);
      } else {
        return;
      }
    }
    if (user) {
      fetchData();
    }
  }, [URL, user, filter]);

  return (
    <HeroContainer title={"List of my job applications"}>
      {isAuthenticated ? (
        <>
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

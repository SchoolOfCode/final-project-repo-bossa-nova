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
  const [shownData, setShownData] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [rerender, setRerender] = useState(0);

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
        setData(mappedData);
      } else {
        return;
      }
    }
    if (user) {
      fetchData();
    }
  }, [URL, user, rerender]);

  useEffect(() => {
    if (data) {
      const dataFilteredByStatus = filterByStatus(data, statusFilter);
      const dataFilteredByCompany = filterByCompany(
        dataFilteredByStatus,
        companyFilter
      );
      setShownData(dataFilteredByCompany);
    } else {
      return;
    }
  }, [data, statusFilter, companyFilter, rerender]);

  function filterByStatus(data, filter) {
    return data.filter((job) => {
      if (filter !== "all") {
        return job.jobStatus === filter;
      } else {
        return job;
      }
    });
  }

  function filterByCompany(data, filter) {
    return data.filter((job) => {
      if (filter !== "all") {
        return job.company.toLowerCase() === filter;
      } else {
        return job;
      }
    });
  }

  function handleChange(e) {
    if (e.target.name === "filter-status") {
      setStatusFilter(e.target.value);
    } else if (e.target.name === "filter-company") {
      setCompanyFilter(e.target.value);
    }
  }

  function getCompanyOptions(jobs) {
    const result = [];
    const companies = jobs.map((job) => job.company);
    companies.forEach((company) => {
      if (!result.includes(company)) {
        result.push(company);
      }
    });
    return ["All", ...result];
  }

  return (
    <HeroContainer title={"List of my job applications"}>
      {isAuthenticated ? (
        <>
          <div className="flex justify-between">
            <div>
              <SelectFilter
                value={statusFilter}
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
            <div>
              <SelectFilter
                value={companyFilter}
                labelText="Filter by Company:"
                name="filter-company"
                update={(e) => handleChange(e)}
                options={data ? getCompanyOptions(data) : ["All"]}
              />
            </div>

            <div className="mb-6 flex justify-end">
              <Link to="/add-new" className="newJobButton">
                Add new job
              </Link>
            </div>
          </div>
          <StickyHeadTable
            data={shownData}
            rerender={rerender}
            setRerender={setRerender}
          />
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
}

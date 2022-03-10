import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HeroContainer from "../../Components/LayoutComponents/HeroContainer";
import PieChart from "../../Components/PieChart";

const Charts = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth0();
  const [data, setData] = useState(null);
  const URL = process.env.REACT_APP_API_URL;

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/api/user/${user.sub}`);
      if (response.status < 300) {
        const data = await response.json();
        const mappedData = mapDataByStatus(data.payload[0].jobs);
        setData(mappedData);
      } else {
        return;
      }
    }
    if (user) {
      fetchData();
    }
  }, [URL, user]);

  function mapDataByStatus(jobs) {
    const labels = [];
    jobs.forEach((job) => {
      if (!labels.includes(job.jobStatus)) {
        labels.push(job.jobStatus);
      }
    });
    const data = labels.map((label) => {
      return {
        label: label,
        value: jobs.filter((job) => job.jobStatus === label).length,
      };
    });
    return data;
  }

  return (
    <HeroContainer title="Stats">
      {isAuthenticated && data ? (
        <div>
          <h2>Jobs By Status:</h2>
          <PieChart outerRadius={150} innerRadius={0} data={data} />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </HeroContainer>
  );
};

export default Charts;

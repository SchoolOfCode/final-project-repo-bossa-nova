import { useEffect, useState } from "react";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch(`${URL}/api/jobs`);
      const data = await response.json();
      setData(data);
    }
    fetchJobs();
  }, [URL]);

  console.log(data);

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;

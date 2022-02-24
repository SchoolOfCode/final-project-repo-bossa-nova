import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

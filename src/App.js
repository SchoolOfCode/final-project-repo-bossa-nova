import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AddNew from "./Pages/AddNew";
import Update from "./Pages/Update";
import Resources from "./Pages/Resources";
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
        <Route path="add-new" element={<AddNew />} />
        <Route path="update" element={<Update />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;

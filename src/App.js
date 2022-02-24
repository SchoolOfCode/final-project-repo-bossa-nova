import { useEffect, useState } from "react";
import Button from "./Components/ButtonPrototype";
import Heading from "./Components/HeadingPrototype";

import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
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

  return <div className="App">
    <Header />
    <Sidebar />
    <Hero />
    <Footer />
  </div>;
}

export default App;

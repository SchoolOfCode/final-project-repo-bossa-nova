/* import { useEffect, useState } from "react"; */
import Header from "../LayoutComponents/Header";
import Sidebar from "../LayoutComponents/Sidebar";
import Footer from "../LayoutComponents/Footer";
import Hero from "../Hero";

import "./App.css";

function App() {
  /*   const URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch(`${URL}/api/user/1`);
      const data = await response.json();
      setData(data);
    }
    fetchJobs();
  }, [URL]);

  console.log(data); */

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

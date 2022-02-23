import { useEffect, useState } from "react";
import Button from "./Components/Button";
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
      <Button type="editButton" />
      <Button type="deleteButton" />
      <Button type="addJobButton" />
      <Button type="cancelButton" />
      <Button type="saveButton" />
      <Button type="saveButton" />
      <Button type="saveButton" />
      <Button type="saveButton" />
      <Button type="saveButton" />
      <Button type="saveButton" />
    </div>
  );
}

export default App;

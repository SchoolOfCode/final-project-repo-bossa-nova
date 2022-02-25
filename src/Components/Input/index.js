import React, { useReducer } from "react";

export default function Input() {
  const initialValues = {
    jobTitle: "",
    company: "",
    salary: "",
    jobStatus: "",
  };

  const [formValues, setFormValues] = useReducer(
    (currentValues, newValues) => ({ ...currentValues, ...newValues }),
    initialValues
  );
  const { jobTitle, company, salary, jobStatus } = formValues;

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  }

  return (
    <form>
      <label>
        {" "}
        Job Title
        <input
          type="text"
          name="jobTitle"
          value={jobTitle}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Company
        <input
          type="text"
          name="company"
          value={company}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Salary
        <input
          type="text"
          name="salary"
          value={salary}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Job Status
        <input
          type="text"
          name="jobStatus"
          value={jobStatus}
          onChange={handleFormChange}
        />
      </label>
    </form>
  );
}

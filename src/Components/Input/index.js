import React, { useReducer } from "react";

const initialValues = {
  jobTitle: "",
  company: "",
  salary: "",
  jobStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}

export default function Input() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  console.log(state)

  return (
    <form>
      <label>
        Job Title
        <input
          type="text"
          name="jobTitle"
          value={state.value}
          onChange={(e) => dispatch({
            type: 'update_input',
            value: e.target.value,
            key: 'jobTitle'
          })}
        />
      </label>
      <label>
        Company
        <input
          type="text"
          name="company"
          value={state.value}
          onChange={(e) => dispatch({
            type: 'update_input',
            value: e.target.value,
            key: 'company'
          })}
        />
      </label>
      <label>
        Salary
        <input
          type="text"
          name="salary"
          value={state.value}
          onChange={(e) => dispatch({
            type: 'update_input',
            value: e.target.value,
            key: 'salary'
          })}
        />
      </label>
      <label>
        Job Status
        <input
          type="text"
          name="jobStatus"
          value={state.value}
          onChange={(e) => dispatch({
            type: 'update_input',
            value: e.target.value,
            key: 'jobStatus'
          })}
        />
      </label>
    </form>
  );
}

// const [formValues, setFormValues] = useReducer(
//   (currentValues, newValues) => ({ ...currentValues, ...newValues }),
//   initialValues
// );

// const { jobTitle, company, salary, jobStatus } = formValues;

// function handleFormChange(e) {
//   const { name, value } = e.target;
//   setFormValues({ [name]: value });
// }

// console.log(initialValues)
// console.log(formValues)

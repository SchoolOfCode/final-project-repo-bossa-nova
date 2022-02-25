import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "nanoid";
import {
  BrowserRouter as Router,
  //   Routes,
  //   Route,
  //   Link,
  //   Navigate,
  useNavigate,
} from "react-router-dom";

import styles from "./Home.module.css";

const columns = [
  { col_id: "jobTitle", label: "Job Title", minWidth: 100 },
  { col_id: "company", label: "Company", minWidth: 100 },
  {
    col_id: "salary",
    label: "Salary",
    minWidth: 100,
    // format: (value) => value.toLocaleString("en-UK"),
  },
  {
    col_id: "jobStatus",
    label: "Status",
    minWidth: 100,
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    col_id: "buttons",
    label: "",
    minWidth: 60,
    align: "right",
  },
];

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

export default function StickyHeadTable() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://job-tracker-main.herokuapp.com/api/jobs`
      );
      const data = await response.json();
      const mappedData = data.map((job) => createData(job));
      setData(mappedData);
    }
    fetchData();
  }, []);

  console.log(data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={nanoid()}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* data && data means doesn't render anything until data has been fetched. Avoid an error */}
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((job) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={job._id}
                        onClick={() => {
                          navigate(`/update/${job._id}`);
                        }}
                      >
                        {columns.map((column) => {
                          return (
                            <TableCell key={nanoid()}>
                              {column.col_id === "buttons" ? (
                                <button>Delete</button>
                              ) : (
                                // accessing object with [] notation because column.col_id is a dinamic value
                                job[column.col_id]
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          // count expects an interger so we pass 0 if data hasn't been fetched yet
          count={data ? data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </main>
  );
}

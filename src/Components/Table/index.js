import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAlert } from "react-alert";

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

export default function StickyHeadTable({ data, rerender, setRerender }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { user } = useAuth0();
  const alert = useAlert();

  const URL = process.env.REACT_APP_API_URL;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  async function handleDeleteRequest(jobID) {
    const response = await fetch(`${URL}/api/user/${user.sub}/${jobID}`, {
      method: "DELETE",
    });
    navigate("/home");
    alert.show(<div className="w-[200px] sm:w-[400px]">Job deleted</div>, {
      title: "Success",
    });

    setRerender(rerender + 1);
    return await response.json();
  }

  return (
    <main>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer className="dark:bg-darkTable" sx={{ maxHeight: 440 }}>
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
                        className="cursor-default"
                        onTouchStart={() => {
                          navigate(`/update/${user.sub}/${job._id}`);
                        }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={job._id}
                      >
                        {columns.map((column) => {
                          return (
                            <TableCell key={nanoid()}>
                              {column.col_id === "buttons" ? (
                                <div>
                                  <Button
                                    btn="tablePositiveButton"
                                    text="Edit"
                                    handleClick={() => {
                                      navigate(
                                        `/update/${user.sub}/${job._id}`
                                      );
                                    }}
                                  />
                                  <Button
                                    btn="tableNegativeButton"
                                    text="Delete"
                                    handleClick={() =>
                                      handleDeleteRequest(job._id)
                                    }
                                  />
                                </div>
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
          className="dark:bg-darkBlockHome"
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

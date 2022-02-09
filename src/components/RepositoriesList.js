import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Alert, Button} from "@mui/material";
import {Link} from "react-router-dom";
import RepositoriesTableFooter from "./RepositoriesTableFooter";

const RepositoriesList = ({
  isError,
  repos,
  filters,
  setFilters
}) => {

  if (isError) return <Alert severity="error" style={{width: "200px", marginTop: "1rem"}}>Error loading data!</Alert>

  const handleChangePage = (event, newPage) => {
    setFilters((prevState) => ({
      ...prevState,
      page: newPage + 1
    }));
  };

  const handleChangeRowsPerPage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
    }));
  };

  return (
    <>
      <TableContainer component={Paper} style={{marginTop: "1rem"}}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell aling="left">Name</TableCell>
              <TableCell align="left">Login</TableCell>
              <TableCell align="left">Owner</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos?.items?.map((repo, index) => (
              <TableRow
                key={repo.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {repo.id}
                </TableCell>
                <TableCell align="left">{repo.name}</TableCell>
                <TableCell align="left">{repo.owner.login}</TableCell>
                <TableCell align="left">{repo.id}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" component={Link} state={{data: repo}} to={"/repo/" + repo.id}>View</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <RepositoriesTableFooter
        repos={repos}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        filters={filters}
      />
    </>

  )
}

export default RepositoriesList;

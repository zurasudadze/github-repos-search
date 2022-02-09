import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Spinner from "./Spinner";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import RepositoriesTableFooter from "./RepositoriesTableFooter";

const RepositoriesList = ({
  isLoading,
  isFetching,
  isError,
  repos,
  filters,
  setFilters
}) => {


  if (isError) return <div>Error loading data!</div>


  const handleChangePage = (event, newPage) => {
    console.log(filters)
    setFilters((prevState) => ({
      ...prevState,
      page: newPage,
    }));
  };

  const handleChangeRowsPerPage = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    }));
  };

  return (
    <>
      <TableContainer component={Paper}>
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
            {isLoading || isFetching ? (<Spinner/>) : repos?.items?.map((repo, index) => (
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
                  <Link
                    state={{data: repo}}
                    to={"/repo/" + repo.id}>
                    <Button variant="outlined">View</Button>
                  </Link>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!isLoading && (
        <RepositoriesTableFooter
          repos={repos}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          filters={filters}
        />
      )}
    </>

  )
}

export default RepositoriesList;

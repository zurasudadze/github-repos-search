import React from "react";
import {Box, TablePagination} from "@mui/material";


const RepositoriesTableFooter = ({
  repos,
  onPageChange,
  onRowsPerPageChange,
  filters
}) => {
  return (
    <>
      {!repos ? null :
        <Box sx={{position: "relative"}}>
          <TablePagination
            sx={{
              "& p": {fontSize: {xs: 12, sm: 14}},
              "& .MuiInputBase-root, & .MuiTablePagination-selectLabel": {
                display: {xs: "none", sm: "block"},
              },
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={repos.total_count}
            rowsPerPage={filters.rowsPerPage}
            page={filters.page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Box>

      }
    </>
  )
};

export default RepositoriesTableFooter;

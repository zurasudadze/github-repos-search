import {Box, CircularProgress} from "@mui/material";

const Spinner = () => (
  <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
    <CircularProgress/>
  </Box>
)
export default Spinner;

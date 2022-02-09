import {Box, Toolbar} from "@mui/material";

const ContentWrapper = ({children}) => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      overflow: "auto",
      height: "100%",
    }}
  >
    <Toolbar/>
    <div>{children}</div>
  </Box>

);


export default ContentWrapper;

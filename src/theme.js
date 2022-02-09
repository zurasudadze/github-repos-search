import {createTheme} from "@mui/material";
import {red, green} from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green[800],
    },
  },
});

export default theme;

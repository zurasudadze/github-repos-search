import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const LinkStyled = styled(Link)({
  color: "#fff",
  textDecoration: "none"
})
const AppTopBar = ({title}) => (
  <AppBar>
    <Toolbar>
      <LinkStyled to="/">
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          {title}
        </Typography>
      </LinkStyled>
    </Toolbar>
  </AppBar>
)

export default AppTopBar;

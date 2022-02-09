import {styled} from "@mui/material";
import {grey} from "@mui/material/colors";
import ContentWrapper from "./ContentWrapper";
import AppTopBar from "./AppTopBar";


const Wrapper = styled("div")({
  display: "flex",
  height: "100vh",
  backgroundColor: grey[50]
})


const Layout = ({children}) => (
  <Wrapper>
    <AppTopBar title="Github Repo Search App"/>
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
)


export default Layout

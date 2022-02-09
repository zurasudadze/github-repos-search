import {useLocation} from "react-router-dom";
import {Avatar, Button, styled, Typography} from "@mui/material";


const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  minHeight: "20rem",
  padding: "1rem"
})

const IntroWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  padding: "20px",
  height: "10rem"
})

const Description = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "1rem"

})

const TypographyStyled = styled(Typography)({
  marginTop: "1rem"
})
const Details = () => {
  const {state} = useLocation()
  const {data} = state;

  console.log(state)
  return (
    <Wrapper>
      <IntroWrapper>
        <Avatar alt="Remy Sharp" src={data.owner.avatar_url}
                sx={{width: 100, height: 100}}
        />
        <TypographyStyled variant="h6">{data.name}</TypographyStyled>
      </IntroWrapper>
      <Description>
        <div>{data.description}</div>
        <Button variant="contained" onClick={() => window.open(`https://www.github.com/${data.full_name}`)}>
          Click here to see repo on github!
        </Button>
      </Description>
    </Wrapper>

  )
}

export default Details;

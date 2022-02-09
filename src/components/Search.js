import {styled, TextField} from "@mui/material";
import Spinner from "./Spinner";

const Wrapper = styled("div")({
  display: "flex"
})
const TextFieldStyled = styled(TextField)({
  width: "20rem",
  marginRight: "1rem"
})

const Search = ({filters, setFilters, isloading, isFetching}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputValueToLowerCase = inputValue.toLowerCase();
    setFilters((prevState) => ({
      ...prevState,
      searchTerm: inputValueToLowerCase
    }));
  }

  return (
    <Wrapper>
      <TextFieldStyled
        id="outlined-basic"
        label="Search for a repository"
        variant="outlined"
        value={filters?.searchTerm}
        onChange={handleChange}/>
      {isloading || isFetching ? <Spinner/> : null}
    </Wrapper>
  )
}

export default Search;

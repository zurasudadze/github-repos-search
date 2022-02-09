import {styled, TextField} from "@mui/material";

const TextFieldStyled = styled(TextField)({
  width: "20rem",
  marginBottom: "1rem"
})

const Search = ({filters, setFilters}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputValueToLowerCase = inputValue.toLowerCase();
    setFilters((prevState) => ({
      ...prevState,
      searchTerm: inputValueToLowerCase
    }));
  }

  return (
    <TextFieldStyled
      id="outlined-basic"
      label="Search for a repository"
      variant="outlined"
      value={filters?.searchTerm}
      onChange={handleChange}/>
  )
}

export default Search;

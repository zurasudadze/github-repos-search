import {styled} from "@mui/material";
import useDebounce from "../hooks/useDebounce";
import Search from "../components/Search";
import useSearchRepos from "../hooks/useSearchRepos";
import RepositoriesList from "../components/RepositoriesList";
import {useLocalStorageState} from "../hooks/useLocalStorageState";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column"
})
const Title = styled("div")({
  fontSize: "2rem",
  marginBottom: "2rem"
})

const Landing = () => {
  const [filters, setFilters] = useLocalStorageState("state", {
    page: 1,
    rowsPerPage: 5,
    searchTerm: ""
  });

  const debouncedFilters = useDebounce(filters, 1000);
  const {data: repos, isLoading, isError, isFetching} = useSearchRepos(debouncedFilters)


  return (
    <Wrapper>
      <Title>Howdy Boss! What are you searching for?</Title>
      <Search
        filters={filters}
        setFilters={setFilters}
        isloading={isLoading}
        isFetching={isFetching}
      />
      <RepositoriesList
        isLoading={isLoading}
        isError={isError}
        repos={repos}
        filters={filters}
        setFilters={setFilters}
      />
    </Wrapper>
  )
}

export default Landing

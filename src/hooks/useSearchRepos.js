import axios from "axios";
import {useQuery} from "react-query";

const fetchRepos = async (filters) => {
  const {data} = await axios.get('https://api.github.com/search/repositories', {
    params: {
      q: filters.searchTerm,
      page: filters.page,
      per_page: filters.rowsPerPage
    }
  })
  return data;
}

const useSearchRepos = (filters) => {
  return useQuery(["repositories", filters],
    () => fetchRepos(filters),
    {
      enabled: Boolean(filters.searchTerm),
      keepPreviousData: true
    });
}

export default useSearchRepos

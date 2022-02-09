import {QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "@mui/material";
import theme from "../theme";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const AppProviders = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </QueryClientProvider>
)

export default AppProviders;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/repo/:id" element={<Details/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

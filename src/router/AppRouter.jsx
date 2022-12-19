import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Details from "../pages/Details";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Details from "../pages/Details";
import Home from "../pages/Home";

const AppRouter = () => {
  const [pathname, setPathname] = useState("");

  return (
    <BrowserRouter>
      <Navbar pathname={pathname} setPathname={setPathname} />
      <Routes>
        <Route path="/" element={<Home setPathname={setPathname} />} />
        <Route
          path="/details/:name"
          element={<Details setPathname={setPathname} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

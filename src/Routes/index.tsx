import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import { Box, Grid, Toolbar } from "@mui/material";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Resume from "../pages/resume";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Wrapper = () => {
  return (
    <Box>
      <Header />
      <Grid sx={{ minHeight: "calc(100vh - 50px)" }}>
        <Toolbar />
        <Outlet />
      </Grid>
      <Footer />
    </Box>
  );
};

export default AppRouter;

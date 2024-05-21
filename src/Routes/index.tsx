import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "../pages/about";
import Projects from "../pages/projects";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
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
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Grid>
      <Footer />
    </Box>
  );
};

export default AppRouter;

import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import { Layout } from "./styles";
import Container from "@mui/material/Container";

const LayoutPage = () => (
  <Layout>
    <NavBar />
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 8,
        gap: 4,
        height: "100%",
      }}
    >
      <Outlet />
    </Container>
  </Layout>
);

export default LayoutPage;

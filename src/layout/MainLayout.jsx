import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <Box>
            <Container>
                <Header></Header>
                <Outlet />
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default MainLayout;
import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const FullLayout = () => {
  return (
    <Box sx={{
        //  backgroundColor:"red", 
       display: "flex", flexDirection: "column", minHeight: "100vh",
       width: "100vw", 
        }}>
      {/* ------------------------------------------- */}
      {/* Main Content */}
      {/* ------------------------------------------- */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
           justifyContent: "center",
          // mt: 8, // Adjust for AppBar height
          // p: 1,
        }}
      >
        <CssBaseline />
        <>
        {/* <Container  sx={{p:0,m:0}}> */}
          <Outlet />
        {/* </Container> */}
        </>
      </Box>
    </Box>
  );
};

export default FullLayout;

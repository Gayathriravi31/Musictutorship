import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LogoImage from "../../assets/images/logo.png";
import { NavLinks } from "./Navigations";
import { useNavigate } from "react-router-dom";
import { Chip, styled } from "@mui/material";

const MobileSidebar = () => {
  const navigate = useNavigate();
  const Logo = styled("img")({
    height: "50px", // Adjust size as needed
    width: "auto", // Maintain aspect ratio
    cursor: "pointer",
  });

  return (
    <>
      <Box px={3}>
        {/* <Logo /> */}
        <a href="/">
          <Logo src={LogoImage} alt="Logo" />
        </a>
      </Box>
      <Box p={3}>
        <Stack direction="column" spacing={2}>
          {NavLinks.map((navlink, i) => (
            <Button
              color="inherit"
              onClick={(e) => {
                if (navlink.title === "Contact Us") {
                  // e.preventDefault();
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                } else {
                  navigate(navlink.to);
                }
              }}
              //   href={navlink.to}
              sx={{
                justifyContent: "start",
              }}
            >
              {navlink.title}
            </Button>
          ))}

          <Button
            color="primary"
            variant="contained"
            href="/auth/register-page"
            sx={{
              transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                   boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.4)",
                    color: "#fff",
                  },
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;

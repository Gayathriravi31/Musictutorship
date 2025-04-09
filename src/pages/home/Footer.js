import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
  styled,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// import XIcon from "@mui/icons-material/X";

import LogoIcon from "../../assets/images/logo.png";
import EmptyIcon from "../../assets/images/image 404.png";
const Logo = styled("img")({
  height: "55px", // Adjust size as needed
  width: "auto", // Maintain aspect ratio
  cursor: "pointer",
  // backgroundColor:"red",
  marginLeft: "-5%",
  marginBottom: "4%",
});

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#FFFAFA",
        width: "100%",
        position: "relative",
        pt: {
          xs: "30px",
          lg: "60px",
        },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" mb={7}>
        <Grid size={{ xs: 12, sm: 5, lg: 4 }}>
          <a href="/">
            <Logo src={LogoIcon} alt="Logo" />
          </a>
          <Stack spacing={1}>
            <Typography
              sx={{
                display: "block",

                // padding: '10px 0',
                fontSize: "15px",
                lineHeight: "25px",
                color: "#6F6C90",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
              component="span"
            >
              MusicTutorship was founded by Vijay with the noble goal of
              providing practical music education that helps students master
              core concepts faster and more effectively.
            </Typography>
          </Stack>
          <Stack direction="row" gap="20px" mt={3}>
            <Tooltip title="Facebook">
              <NavLink
                to="https://www.facebook.com/share/18xUjfdk3s/?mibextid=wwXIfr"
                target="_blank"
              >
                <FacebookIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </NavLink>
            </Tooltip>
            <Tooltip title="Instagram">
              <NavLink
                to="https://www.instagram.com/musictutorship?igsh=MXY0c3EzaWRxeHBqaA== "
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </NavLink>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <NavLink to="https://wa.me/9514499932" target="_blank">
                <WhatsAppIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </NavLink>
            </Tooltip>
            <Tooltip title="Mail">
              <NavLink to="mailto:contact@musictutorship.com">
                <MailOutlineIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </NavLink>
            </Tooltip>
            <Tooltip title="X (Twitter)">
              <NavLink to="#" target="_blank">
                {/* Replace XIcon with an appropriate icon if needed */}
                {/* <XIcon sx={{ fontSize: 24, color: "primary.main" }} /> */}
                <TwitterIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </NavLink>
            </Tooltip>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 3, lg: 2 }}>
          <Typography
            color="primary.main"
            fontSize="17px"
            fontWeight="600"
            mb="22px"
          >
            Company
          </Typography>
          <Stack spacing={1}>
            <NavLink to="/">
              <Typography sx={{ ...linkStyles }}>Home</Typography>
            </NavLink>
            <NavLink to="/about-me">
              <Typography sx={{ ...linkStyles }}>About Me</Typography>
            </NavLink>
            <NavLink to="tel:9514499932">
              <Typography sx={{ ...linkStyles }}>Contact me</Typography>
            </NavLink>
            <NavLink to="/courses-page">
              <Typography sx={{ ...linkStyles }}>Courses</Typography>
            </NavLink>
            <NavLink>
              <Typography sx={{ ...linkStyles }}>Privacy policy </Typography>
            </NavLink>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 4, lg: 4 }}>
          <Typography
            color="primary.main"
            fontSize="17px"
            fontWeight="600"
            mb="22px"
          >
            Contact us
          </Typography>
          <Stack spacing={1}>
            <NavLink to="mailto:contact@musictutorship.com">
              {/* <Typography sx={{ ...linkStyles }}>
                contact@musictutorship.com
              </Typography> */}
              <Typography
                sx={{ ...linkStyles, display: "flex", alignItems: "center" }}
              >
                <MailOutlineIcon sx={{ marginRight: 1, fontSize: 20 }} />
                contact@musictutorship.com
              </Typography>
            </NavLink>
            <NavLink to="tel:9514499932">
              <Typography
                sx={{ ...linkStyles, display: "flex", alignItems: "center" }}
              >
                <PhoneIcon sx={{ marginRight: 1, fontSize: 20 }} />
                +91 9514499932
              </Typography>
            </NavLink>
            <NavLink>
              <Typography
                sx={{
                  ...linkStyles,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <LocationOnIcon sx={{ marginRight: 1, fontSize: 24 }} />
                27/49 Shanmughamani illam, Lakeview road, West Mambalam, Chennai
                600033
              </Typography>
            </NavLink>
          </Stack>
        </Grid>
      </Grid>

      <Divider />

      {/* Footer Bottom */}
      <Box py="40px" display="flex" flexWrap="wrap" justifyContent="center">
        <Typography sx={{ ...linkStyles }}>
          © 2025 All Rights Reserved to MusicTutorship
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", bottom: 82, right: 0 }}>
        <img src={EmptyIcon} alt="logo" />
      </Box>
    </Container>
  );
};

// Common styles for links
const linkStyles = {
  display: "block",
  padding: "5px 0",
  fontSize: "15px",
  color: "#6F6C90",
  "&:hover": {
    color: (theme) => theme.palette.primary.main,
  },
};

export default Footer;

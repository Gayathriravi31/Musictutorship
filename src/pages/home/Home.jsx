import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Button,
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomHeader from "../../components/header/CustomHeader";
import PageContainer from "../../components/PageContainer";
import BgImage from "../../assets/images/bg_1.png";
import dp_img from "../../assets/images/dp_img.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";
import DifferentMoto from "./DifferentMoto";
import PrimaryCourses from "./PrimaryCourses";
import AccordianFaq from "./AccordianFaq";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import MusicCourseModal from "../../components/popup-modal/MusicCourseModal";
import SuccessModal from "../../components/popup-modal/SuccessModal";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const handleAboutMeClick = () => {
    navigate("/about-me");
  };
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <PageContainer title="Homepage" description="welcome">
      <CustomHeader />

      <Grid
        container
        direction="column"
        spacing={2}
        mt={2}
        sx={{ p: "4%", pt: "0" }}
      >
        <Box sx={{ display: "flex", gap: 5 }}>
          <Box
            sx={{
              width: isSmallScreen ? "100%" : "48%",
              display: "flex",
              flexDirection: "column",
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "100%",
                background: "linear-gradient(90deg, #168BAF 0%, #DC2106 7.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Music <span style={{ color: "primary.main" }}>Tutorship</span>
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 700,
                fontSize: "80px",
                lineHeight: "100%",
              }}
            >
              Elevate Your
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 700,
                fontSize: "80px",
                lineHeight: "90px",

                mb: 2,
              }}
            >
              <Box component="span" sx={{ color: "primary.main" }}>
                Music{" "}
              </Box>
              Journey
            </Typography>

            <Typography
              className="music-title-dec"
              sx={{ lineHeight: "23px", wordSpacing: "2px" }}
            >
              Ready to take your music to the next level? My personalized music{" "}
              <br></br>
              mentorship program is designed to help you unlock your full
              potential.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                p: 1,
                pl: 3,
                pr: 3,

                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 1,
                textTransform: "none",
              }}
              onClick={handleOpen}
              endIcon={<ArrowForwardIcon />}
            >
              Book free demo
            </Button>
          </Box>
          <Box>
            {/* <Box sx={{ display: isSmallScreen ? 'none' : 'block' }}> */}
            <img
              src={BgImage}
              alt="Music Tutorship"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        <Grid
          mt={2}
          container
          sx={{
            display: "flex",
            // backgroundColor: "pink",
          }}
        >
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} lg={6} sx={{ width: { md: "50%" } }}>
            <img
              src={dp_img}
              alt="Music Tutorship"
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </Grid>

          {/* Right Side - Text and Button */}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { md: "48%" },
              padding: 4,
            }}
          >
            <Typography
              sx={{
                mt: 8,
                mb: 4,
                color: "primary.main",
              }}
              variant="h4"
            >
              About{" "}
              <span
                style={{
                  color: "#000",
                }}
              >
                Me
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left", // Adjust alignment for better readability
                whiteSpace: "normal", // Ensure text wraps naturally
                mb: 3.5,
                color: "#555555",
                fontWeight: "400",
                fontSize: "15px",
                wordSpacing: "2px",
                lineHeight: "25px",
              }}
            >
              With expertise in music production, mixing, sound design, and
              music theory, I’ve collaborated with over 20 composers worldwide.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left", // Adjust alignment for better readability
                whiteSpace: "normal", // Ensure text wraps naturally
                mb: 3.5,
                color: "#555555",
                fontWeight: "400",
                fontSize: "15px",
                wordSpacing: "2px",
                lineHeight: "25px",
              }}
            >
              As a senior music producer working with music director Ghibran,
              I’ve helped create more than 230 songs and 55 film scores across
              various Indian languages.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left", // Adjust alignment for better readability
                whiteSpace: "normal", // Ensure text wraps naturally
                mb: 3.5,
                color: "#555555",
                fontWeight: "400",
                fontSize: "15px",
                wordSpacing: "2px",
                lineHeight: "25px",
              }}
            >
              I’ve also dedicated time to mentoring over 20 students in music
              production, offering both online and in-person instruction focused
              on practical music production skills and music theory.
            </Typography>
            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                fontSize: "13px",

                p: 1,
                pl: 3,
                pr: 3,
              }}
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleAboutMeClick}
            >
              Know About Me
            </Button>

            <Grid container spacing={2} sx={{ mt: 3 }}>
              {[
                { year: "2021", label: "Since" },
                { year: "400+", label: "Students" },
                { year: "1278", label: "Class tought" },
              ].map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    sx={{
                      mt: 1,
                      // backgroundColor: "#f5f5f5",
                      // padding: 2,
                      textAlign: "center",
                      borderRadius: 2,
                      // boxShadow: 1,
                      mr: 8,
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {item.year}
                    </Typography>
                    <Typography
                      color="primary.main"
                      sx={{
                        fontSize: "13px",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <PrimaryCourses />
        <DifferentMoto />

        <Grid
          mt={5}
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ color: "primary.main" }} variant="h2">
            Common Inquiries About{" "}
            <span style={{ color: "#000" }}> My Mentorship</span>
          </Typography>
          <Typography
            sx={{
              color: "#555555",
              mt: "2px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Explore answers to the most common questions about our music
            mentorship program,<br></br> designed to help you excel in your
            musical journey.
          </Typography>
          <AccordianFaq />
        </Grid>
      </Grid>
      <MusicCourseModal
        open={openModal}
        handleClose={handleClose}
        onSubmit={() => {
          setSuccessOpen(true);
        }}
      />
      <SuccessModal
        open={successOpen}
        onClose={() => {
          setSuccessOpen(false);
        }}
      />
      <Box sx={{ backgroundColor: "#FFFAFA", width: "100%" }}>
        <Footer />
      </Box>
    </PageContainer>
  );
};

export default Home;

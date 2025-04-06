import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomHeader from "../components/header/CustomHeader";
import PageContainer from "../components/PageContainer";
import DP_img from "../assets/images/dp_img.png";
import Mission_Img from "../assets/images/Mission_Img.png";
import Works_Img from "../assets/images/Works_img.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GalleryImg from "../assets/images/GalleryImg.png";
import Footer from "./home/Footer";
import ShortsGrid from "../components/ShortsGrid";
import { useNavigate } from "react-router-dom";

const AboutMePage = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLearnMoreClick = (route) => {
    navigate("/courses-page"); // Navigate to the specified route
  };

  return (
    <PageContainer title="AboutMe-Page" description="you can know about me">
      <CustomHeader />
      <Grid
        mt={2}
        container
        sx={{
          display: "flex",
          // backgroundColor: "pink",
        }}
      >
        <Grid item xs={12} md={6} lg={6} sx={{ width: { md: "50%" } }}>
          <img
            src={DP_img}
            alt="Music Tutorship"
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
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
              mt: 4,
              mb: 4,
              color: "primary.main",
            }}
            variant="h4"
          >
            I am{" "}
            <span
              style={{
                color: "#000",
              }}
            >
              Vijay
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
            With expertise in music production, mixing, sound design, and music
            theory, I’ve collaborated with over 20 composers worldwide.
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
            As a senior music producer working with music director Ghibran, I’ve
            helped create more than 230 songs and 55 film scores across various
            Indian languages.
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

          <Grid container spacing={2} sx={{ mt: 1 }}>
            {[
              { year: "2001", label: "Since" },
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
      <Grid
        container
        sx={{
          display: "flex",
          // backgroundColor: "pink",
        }}
      >
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
              mt: 4,
              mb: 4,
              color: "primary.main",
            }}
            variant="h4"
          >
            Primary{" "}
            <span
              style={{
                color: "#000",
              }}
            >
              Mission
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
            MusicTutorship was founded by Vijay with the noble goal of providing
            practical music education that helps students master core concepts
            faster and more effectively. Through this value-based learning
            approach, students can excel in music in a fraction of the
            traditional learning time. This is achieved by clearly explaining
            musical concepts alongside their real-world applications.
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
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ width: { md: "50%" } }}>
          <img
            src={Mission_Img}
            alt="Music Tutorship"
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        mt={5}
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 8,
        }}
      >
        <Typography
          sx={{
            mt: 4,
            mb: 4,
            color: "primary.main",
          }}
          variant="h4"
        >
          My{" "}
          <span
            style={{
              color: "#000",
            }}
          >
            Works
          </span>
        </Typography>
        <img
          src={Works_Img}
          alt="Music Tutorship"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid
        mt={5}
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 8,
        }}
      >
        <Typography
          sx={{
            mt: 4,
            mb: 4,
            color: "primary.main",
          }}
          variant="h4"
        >
          Gallery
        </Typography>
        <img
          src={GalleryImg}
          alt=""
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        {/* <ShortsGrid />  */}
      </Grid>
      <Box sx={{ backgroundColor: "#FFFAFA", width: "100%" }}>
        <Footer />
      </Box>
    </PageContainer>
  );
};

export default AboutMePage;

import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageContainer from "../../components/PageContainer";
import CustomHeader from "../../components/header/CustomHeader";
import MicImg from "../../assets/images/Mic_img.png";
import CourseCommonImg from "../../assets/images/course-cmn-img.png";
import Footer from "../home/Footer";
import MusicCourseModal from "../../components/popup-modal/MusicCourseModal";
import SuccessModal from "../../components/popup-modal/SuccessModal";
import { useLocation, useNavigate } from "react-router-dom";
import courseOne from "../../components/content/CourseDetails/courseOne";
import courseTwo from "../../components/content/CourseDetails/courseTwo";
import courseThree from "../../components/content/CourseDetails/courseThree";

const courseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation() || {};
  const { num } = location.state;
  const [data, setdata] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    if (num === 1) {
      setdata(courseOne);
    } else if (num === 2) {
      setdata(courseTwo);
    } else if (num === 3) {
      setdata(courseThree);
    } else {
      setdata(courseOne);
    }
  }, [num]);

  return (
    <PageContainer
      title="Course-Listing-Page"
      description="you can find the avelable  Courses here"
    >
      <Box position="relative" textAlign="center">
        <img
          src={data?.bannerImage}
          alt="Course Banner"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            // top: "40%",
            // left: "50%",
          }}
        >
          <CustomHeader isTransparent={true} positionSticky={false} />
        </Box>
        {/* Heading */}
        <Typography
          variant="h4"
          component="h4"
          sx={{
            paddingBottom: "2%",
            width: "70%",
            fontSize: "30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            lineHeight: "100%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {data?.sub_title}
        </Typography>
        {/* Button Container */}
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "180px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              justifyContent: "center",
              gap: 1,
              textTransform: "none",
              backgroundColor: "#DC2106",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": {
                border: "1.5px solid #DC2106",
                backgroundColor: "transparent",
                color: "white",
              },
            }}
            onClick={handleOpen}
          >
            Enquire Now
          </Button>
        </Box>
      </Box>
      <Grid
        container
        ml={6}
        mr={6}
        mt={5}
        mb={5}
        sx={{
          display: "flex",
          flexDirection: "row", // Keep items in a row
          justifyContent: "space-between", // Distribute space evenly
          alignItems: "flex-start",
          gap: 2, // Adds space between items
        }}
      >
        <Box sx={{ flex: 1, padding: 1 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              mb: 2,
            }}
            variant="h3"
          >
            <span style={{ color: "black" }}>{data?.sub_title} </span>
            {/* Live Course{" "} */}
          </Typography>
          <Typography sx={{ mb: 2, color: "primary.main" }}>
            {data?.duration}
          </Typography>
          <Typography sx={{ color: "primary.main" }}>
            {data?.duration_two}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: 1,
            color: "#555555",
          }}
        >
          <Typography>{data?.description_one}</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: 1,
            color: "#555555",
          }}
        >
          <Typography>{data?.description_two}</Typography>
        </Box>
      </Grid>
      <Typography
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
        }}
        variant="h3"
      >
        What You Will <span style={{ color: "black" }}>Learn</span>
      </Typography>
      <Grid
        container
        spacing={4} // Space between cards
        sx={{ justifyContent: "center", mt: 3, mb: 10 }}
      >
        {data?.courseLearning?.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 300,
                height: 250,
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#fff",
                boxShadow: "0 8px 20px rgba(229, 57, 48, 0.3)",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {/* Icon Section */}
              <Box
                sx={{
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // backgroundColor: "yellow",
                  marginBottom: -5,
                }}
              >
                {item.icon}
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingX: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "#D32F2F" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#757575",
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 8,
        }}
      >
        <img
          src={CourseCommonImg}
          alt="Course Banner"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", mt: 10, mb: 10 }}
      >
        {data?.courseHighLight?.map((item, index) => (
          <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
            {" "}
            {/* 4/12 = 1/3 for 3 cards per row */}
            <Box
              sx={{
                width: "350px",
                height: "110px",
                padding: 2,
                border: index === 0 ? "none" : "1px solid #DC2106",
                fontWeight: index === 0 ? "700px" : "normal",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
                transition: "transform 0.3s",
                boxSizing: "border-box",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {index !== 0 && (
                  <span style={{ fontSize: "30px", paddingRight: "15px" }}>
                    {item.icon}
                  </span>
                )}
                {index === 0 ? (
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "bold", color: "#DC2106" }}
                  >
                    {item.title}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#DC2106" }}
                  >
                    {item.title}
                  </Typography>
                )}
              </Box>

              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  fontSize: "12px",
                  color: "#555555",
                  // textOverflow: "ellipsis",
                  // display: "-webkit-box",
                  // WebkitLineClamp: 2,
                  // WebkitBoxOrient: "vertical",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        sx={{ position: "relative", textAlign: "center", mb: 10 }}
      >
        <img src={MicImg} alt="Mic" style={{ width: "100%", height: "auto" }} />

        {/* Overlay Content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Book A Course or Class Today
          </Typography>
          <Typography
            variant="body1"
            sx={{
              letterSpacing: "1px",
              fontFamily: "Public Sans, sans-serif",
            }}
          >
            Join Now to start making the music you've always dreamed of!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              letterSpacing: "1px",
              fontFamily: "Public Sans, sans-serif",
            }}
          >
            Excited to start creating your own amazing songs? Come join us on
            this musical adventure!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "150px", height: "40px", mt: 2 }}
            onClick={handleOpen}
          >
            Book a Demo
          </Button>
        </Box>
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

      <Footer />
    </PageContainer>
  );
};

export default courseDetails;

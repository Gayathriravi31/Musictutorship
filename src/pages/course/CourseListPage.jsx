import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageContainer from "../../components/PageContainer";
import CustomHeader from "../../components/header/CustomHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image1 from "../../assets/images/Course_img_1.png";
import Image2 from "../../assets/images/course_2.png";
import Image3 from "../../assets/images/course_3.png";
import CourseListBannerImg from "../../assets/images/Course_List_banner_Img.png";
import BackgroundIcon from "../../assets/images/Bg_icon.svg";
import ForegroundIcon1 from "../../assets/images/icon1_course.svg";
import ForegroundIcon2 from "../../assets/images/icon2_course.svg";
import ForegroundIcon3 from "../../assets/images/icon3_course.svg";
import { useNavigate } from "react-router-dom";
import MusicCourseModal from "../../components/popup-modal/MusicCourseModal";
import SuccessModal from "../../components/popup-modal/SuccessModal";
import Footer from "../home/Footer";
import BookCourseContent from "../../components/BookCourseContent";

const classesData = [
  {
    title: "Complete Music Theory Live Course",
    highlightedWord: "Complete Music Theory",
    description:
      "This course teaches you all about music theory in a simple, step-by-step way. Whether you're just starting out or already know some music, you'll learn how music works—from basic notes to creating your own songs. I'll help you understand music better and become a more confident musician.",
    extraInfo: ["(From Beginner to Advanced Level)", "(12 Months Duration)"],
    image: Image1,
    route: "/course-details",
    toId: 1,
  },
  {
    title: "Music Production Live Course",
    description:
      "Musicians play instruments and sing, while music producers shape the entire sound. They record, mix, and create beats, blending everything seamlessly. Think of them as musical architects with tech skills! If you dream of making music from your bedroom with just a laptop and headphones, this course is for you!",
    extraInfo: [
      "(From Beginner to Advanced Level)",
      "(12 Months Duration - 10 Students Per Batch)",
    ],
    image: Image2,
    route: "/courses/music-production",
    toId: 2,
  },
  {
    title: "One-on-One Music Production Mentorship",
    description:
      "Ready to fast-track your music production skills? Whether it's a career goal or a passion project, this program is for you! In personalized 1-on-1 sessions, I'll guide you through different styles and help you create professional tracks. Plus, you'll get exclusive insights from my film projects!",
    extraInfo: [
      "(FLAGSHIP COURSE)",
      "(Master the complete journey of music production)",
    ],
    image: Image3,
    route: "/courses/one-on-one-production",
    toId: 3,
  },
];
const statsData = [
  {
    year: "400+",
    label: "Students",
    bgImage: BackgroundIcon,
    fgImage: ForegroundIcon1,
  },
  {
    year: "1278",
    label: "Classes Taught",
    bgImage: BackgroundIcon,
    fgImage: ForegroundIcon2,
  },
  {
    year: "4.5+",
    label: "Google Ratings",
    bgImage: BackgroundIcon,
    fgImage: ForegroundIcon3,
  },
];
const CourseListPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isBelow900 = useMediaQuery('(max-width:900px)');

  const handleViewMoreClick = (route) => {
    console.log("route", route);
    navigate(`/course-details/${route.title}`, { state: { num: route.toId } });
  };

  const handleCall = () => {
    window.location.href = "tel:+9514499932";
  };

  return (
    <PageContainer
      title="Course-Listing-Page"
      description="you can find the avelable  Courses here"
    >
      <Box position="relative" textAlign="center">
        <img
          src={CourseListBannerImg}
          alt="Course Banner"

          style={{
            width: "100%",
            // height: {xl:"auto",sm:},
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
          variant="h1"
          component="h1"

          sx={{
            width: { xs: "90%", sm: "80%", md: "70%" },
            fontSize: { xs: "28px", sm: "42px", md: "56px", lg: "70px" },
            paddingBottom: "5%",
            // width: "70%",
            // fontSize: "70px",
            position: "absolute",
            top: "40%",
            left: "50%",
            lineHeight: "100%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Be more than just a <span style={{ color: "#DC2106" }}>Musician</span>
        </Typography>
        {/* Button Container */}
        {!isMobile &&
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
                // width: "200px",
                // height: "50px",
                px: 3,
                py: 1.5,
                display: "flex",
                alignItems: "center",
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
              endIcon={<ArrowForwardIcon />}
              onClick={handleOpen}
            >
              Book Free Demo
            </Button>

            <Button
              sx={{
                // width: "200px",
                // height: "50px",
                px: 8,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
                color: "white",
                border: "1.5px solid #DC2106",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#DC2106",
                  color: "white",
                },
              }}
              onClick={handleCall}
            >
              Call Now
            </Button>
          </Box>}
        {!isMobile &&
          <Box
            sx={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "white",
              zIndex: 1,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              gap: { xs: 2, md: 4 },
              flexWrap: "wrap",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {statsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  // Fix size for the first box
                  // flex: index === 0 ? "0 0 160px" : "1 1 30%",
                  minWidth: index === 0 ? "150px" : "120px",
                }}
              >
                {/* Icon Section */}
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <img
                    src={item.bgImage}
                    alt="Background"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    src={item.fgImage}
                    alt="Icon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>

                {/* Text Section */}
                <Box>
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
              </Box>
            ))}
          </Box>}
      </Box>
      {isMobile &&
        <Grid size={{ xs: 12 }} sx={{}}>
          <Box
            sx={{
              p:1,
              // position: "absolute",
              // top: "60%",
              // left: "50%",
              // transform: "translateX(-50%)",
              display: "flex",
              alignItems:"center",
              flexDirection: "row",
              justifyContent:"center",
              // backgroundColor:'red',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                // width: "200px",
                // height: "50px",
                px: 3,
                py: 1.5,
                display: "flex",
                alignItems: "center",
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
              endIcon={<ArrowForwardIcon />}
              onClick={handleOpen}
            >
              Book Free Demo
            </Button>

            <Button
              sx={{
                // width: "200px",
                // height: "50px",
                px: 8,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
                color: "#DC2106",
                border: "1.5px solid #DC2106",
                fontSize: "16px",
                fontWeight: "bold",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#DC2106",
                  color: "white",
                },
              }}
              onClick={handleCall}
            >
              Call Now
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              gap: 3,
              flexWrap: "wrap",
              textAlign: "center"
            }}
          >
            {statsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  // Fix size for the first box
                  // flex: index === 0 ? "0 0 160px" : "1 1 30%",
                  minWidth: index === 0 ? "160px" : "120px",
                }}
              >
                {/* Icon Section */}
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <img
                    src={item.bgImage}
                    alt="Background"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    src={item.fgImage}
                    alt="Icon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Box>

                {/* Text Section */}
                <Box>
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
              </Box>
            ))}
          </Box>
        </Grid>}
      <Grid
  
        // mt={5}
        mb={5}
        item
        size={{xs:12}}
    
        sx={{
          mt: { xs: 3, sm: isBelow900?35:20,lg:8,md:8 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            // mt: isBelow9000,
            mb: 4,
            color: "primary.main",
            fontWeight: "bold",
          }}
          variant="h2"
        >
          Primary <span style={{ color: "black" }}>Classes</span>
        </Typography>

        {classesData.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              mb: 3,
              width: "80%",
              borderRadius: "6px",
              backgroundColor: "#FFEEEB",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Image */}
            <Box
              sx={{
                // width: "45%",
                width:{ xs: "96%",md:'45%',lg:'45%',xl:'45%'},
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height:{ xs: "300px",md:'auto',lg:'auto',xl:'auto'},
                margin: "2%",
                borderRadius: "10px",
              }}
            ></Box>

            {/* Right Text and Buttons */}
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  mt: {xs:0,md:3},
                  mb: 2,
                  fontWeight: "bold",
                  fontFamily: "Public Sans, sans-serif",
                }}
              >
                {item.title.split(" ").map((word, idx) => (
                  <span key={idx}>
                    {word === item.highlightedWord ? (
                      <span style={{ color: "#DC2106" }}>{word}</span>
                    ) : (
                      word
                    )}
                    {idx !== item.title.split(" ").length - 1 && " "}
                  </span>
                ))}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  color: "#555555",
                  mb: 2,
                  fontFamily: "Public Sans, sans-serif",
                }}
              >
                {item.description}
              </Typography>

              {item.extraInfo.map((text, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    lineHeight: "30px",
                  }}
                >
                  {text}
                </Typography>
              ))}

              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  Book a demo
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      border: "none",
                    },
                  }}
                  onClick={() => handleViewMoreClick(item)}
                >
                  View more
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>


     <BookCourseContent onClick={handleOpen}/>
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

export default CourseListPage;

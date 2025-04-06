import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import course_1 from "../../assets/images/course_1.png";
import course_2 from "../../assets/images/course_2.png";
import course_3 from "../../assets/images/course_3.png";

const coursesList = [
  {
    title: "Complete Music Production Live Course",
    subtitles:
      "(From Beginner to Advance level) (12 Months Duration - 10 Students Per Batch)",
    image: course_1,
    route: "/course-details/Music Production Live Courses",
    toId: 2,
  },
  {
    title: "Complete Music Theory Live Course",
    subtitles:
      "(From Beginner to Advanced Level) (12 Months Duration - 7 Students Per Batch)",
    image: course_2,
    route: `/course-details/Complete Music Theory Live Courses`,
    toId: 1,
  },
  {
    title: "One-on-One Music Production Mentorship 90MIN",
    subtitles: "Flagship Course - 4 Classes / Month",
    image: course_3,
    route: "/course-details/One-on-One Music Production Mentorship",
    toId: 3,
  },
];

const PrimaryCourses = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    console.log("route", route.route);
    navigate(route.route, { state: { num: route.toId } });
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        mb: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "primary.main" }} variant="h2">
        Primary <span style={{ color: "#000" }}>Courses</span>
      </Typography>
      <Typography sx={{ color: "#555555", mt: "2px", fontSize: "12px" }}>
        Featured Learning Paths
      </Typography>

      <Grid container spacing={4} mb={3} mt={3} justifyContent="center">
        {coursesList.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: "relative",
                maxWidth: 350,
                overflow: "hidden",
                backgroundColor: "red",
                borderRadius: "10px",
                transition:
                  "box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-3px)",
                },
                cursor: "pointer", // Cursor pointer for clickable card
              }}
              onClick={() => handleCardClick(course)} // Navigate on click
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 2,
                  color: "white",
                }}
              >
                <ArrowForwardIcon
                  sx={{ position: "absolute", top: 15, right: 14 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", lineHeight: "23px" }}
                >
                  {course.title}
                </Typography>
                <Typography sx={{ lineHeight: "20px" }} variant="body2">
                  {course.subtitles}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PrimaryCourses;

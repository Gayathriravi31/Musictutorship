import { Box, Button, Grid, Typography } from "@mui/material";
import MicImg from "../assets/images/Mic_img.png";


const BookCourseContent = ({ onClick }) => {
    return (
        <Grid container sx={{ position: "relative", textAlign: "center" }}>
        <img src={MicImg} alt="Mic" style={{ width: "100%", height: "411px" }} />
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
            onClick={onClick}
          >
            Book a Demo
          </Button>
        </Box>
      </Grid>
    )

}
 export default BookCourseContent;
import React, { useState } from "react";
import { Grid, Box, Typography, Button, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomHeader from "../../components/header/CustomHeader";
import PageContainer from "../../components/PageContainer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LineGrp from "../../assets/images/Line_grp.png";
import GuitarImg from "../../assets/images/Guitar_grp.png";
import RandomLine from "../../assets/images/RandomLine.png";
import Footer from "../home/Footer";
import GeneralDetails from "./GeneralDetails";
import CourseDetails from "./CourseDetails";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/popup-modal/SuccessModal";
import CustomSnackbar from "../../components/form-elements/CustomSnackbar";
import { usersRegisterAPI } from "../../services/auth.service";
import coursePriceList from "../../components/content/coursePriceList";

const RegisterPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState("1");
  const [isStepOne, setIsStepOne] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // success | error | warning | info
  });

  const [successOpen, setSuccessOpen] = useState(false);
  const [generalFormData, setGeneralFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    postal: "",
    address: "",
    district: "",
    state: "",
  });
  const [courseFormData, setCourseFormData] = useState({
    plan_type: "Monthly",
    learning_duration: "",
    preferred_day: [],
    choice_of_course: [],
    course_enroll: [],
    courseFormData: "  ",
  });
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  const handleSubmit = async () => {
    const enrolledCourseTitles = courseFormData?.course_enroll?.map((id) => {
      const course = coursePriceList?.find((item) => item.id === id);
      return course ? course?.title : null;
    });

    let payload = {
      name: generalFormData.name,
      phone_number: generalFormData.mobile,
      email: generalFormData.email,
      dob: formatDate(generalFormData.dob),
      postal_code: generalFormData.postal,
      state: generalFormData.state,
      district: generalFormData.district,
      address: generalFormData.address,
      course: enrolledCourseTitles,
      day: courseFormData.preferred_day,
      plan: courseFormData.plan_type,
      duration: String(courseFormData.learning_duration),
      coupon_code: "a4f6",
      amount: Number(courseFormData.total_amount),
      //  "preferred_day_for_classes":"Monday"
    };

    console.log(payload, "peyloadddd");
    try {
      const { data } = await usersRegisterAPI(payload);
      console.log(data, "data from book user Register");
      if (data?.success) {
        setSuccessOpen(true);
        // onSubmit();
        // navigate('/');
      }
    } catch (e) {
      console.log(e, "error");
    }
    //
  };

  return (
    <PageContainer
      title="Register-Page"
      description="Register to attend the course"
    >
      <CustomHeader />

      <Grid
        container
        sx={{
          position: "relative",
          textAlign: "center",
          mb: 18,
          mt: 12,
          p: "0px 22%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(251, 120, 100, 0.92) 10%, rgba(251,120,100,0) 80%)",
            backdropFilter: "blur(120px)",
            WebkitBackdropFilter: "blur(120px)",
            zIndex: 0,
            filter: "blur(120px)",
            borderRadius: "50%",
          }}
        ></Box>
        <img
          src={GuitarImg}
          alt="Mic"
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        />
      </Grid>

      <Grid
        container
        sx={{ position: "relative", textAlign: "center", alignItems: "center" }}
      >
        <Stack
          sx={{
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              border: "1.5px solid #DC2106",
              borderColor: !isStepOne ? "#8D8D8D" : "#DC2106",
              // height:"60px",
              // width:"140px",
              padding: "14px 15px",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",

              gap: 2,
              "&:hover": {},
            }}
          >
            <Typography
              sx={{
                color: !isStepOne ? "#9BA1AB" : "#333333",
                fontSize: "16px",
                fontWeight: "700",
                letterSpacing: "3px",
                border: "1.5px solid #DC2106",
                borderColor: !isStepOne ? "#8D8D8D" : "#DC2106",

                borderRadius: "50px",
                p: "3px 6px 3px 9px",
              }}
            >
              {"1"}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                color: !isStepOne ? "#9BA1AB" : "#333333",
              }}
            >
              General details
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#8D8D8D",
              height: "1px",
              width: "20%", // Adjust as needed
              // flexGrow: 1, // Ensures it stretches
            }}
          ></Box>
          <Box
            sx={{
              border: "1.5px solid #DC2106",
              borderColor: isStepOne ? "#8D8D8D" : "#DC2106",
              // height:"60px",
              // width:"140px",
              padding: "14px 15px",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
              gap: 2,
              "&:hover": {},
            }}
          >
            <Typography
              sx={{
                color: isStepOne ? "#9BA1AB" : "#333333",
                fontSize: "16px",
                fontWeight: "700",
                letterSpacing: "3px",
                border: "1.5px solid #DC2106",
                borderColor: isStepOne ? "#8D8D8D" : "#DC2106",

                borderRadius: "50px",
                p: "3px 6px 3px 9px",
              }}
            >
              {"2"}
            </Typography>
            <Typography
              sx={{
                color: isStepOne ? "#9BA1AB" : "#333333",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Course details
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
          <img
            src={RandomLine}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 0,
              opacity: 0.2,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              p: 8,
              pl: { xl: 12, md: 8, sm: 4, xs: 3 }, // Padding Left
              pr: { xl: 12, md: 8, sm: 4, xs: 3 }, // Padding Right
              // backgroundColor: "red"
            }}
          >
            {isStepOne ? (
              <GeneralDetails
                formData={generalFormData}
                setFormData={setGeneralFormData}
                setNext={setIsStepOne}
                setSnackbar={setSnackbar}
                snackbar={snackbar}
              />
            ) : (
              <CourseDetails
                formData={courseFormData}
                setFormData={setCourseFormData}
                setNext={setIsStepOne}
                onSubmit={handleSubmit}
                setSnackbar={setSnackbar}
                snackbar={snackbar}
              />
            )}
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        sx={{ position: "relative", textAlign: "center", mb: 18, mt: 18 }}
      >
        <img
          src={LineGrp}
          alt="Mic"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      {successOpen && (
        <SuccessModal
          open={successOpen}
          onClose={() => {
            setTimeout(() => setSuccessOpen(false), 2000);
            navigate("/"); // Close modal immediately
          }}
        />
      )}

      <Box sx={{ backgroundColor: "#FFFAFA", width: "100%" }}>
        <Footer />
      </Box>
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </PageContainer>
  );
};

export default RegisterPage;

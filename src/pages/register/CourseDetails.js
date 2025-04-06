import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  duration,
  FormControlLabel,
  Grid,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import CustomFormLabel from "../../components/form-elements/CustomFormLabel";
import CustomTextField from "../../components/form-elements/CustomTextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CustomMultiSelect from "../../components/form-elements/CustomMultiSelect";
import { useState, useEffect } from "react";
import CustomSingleSelect from "../../components/form-elements/CustomSingleSelect";
import CustomPlanSelector from "../../components/form-elements/CustomPlanSelctor";
import coursePriceList from "../../components/content/coursePriceList";
import SuccessModal from "../../components/popup-modal/SuccessModal";
import CustomSnackbar from "../../components/form-elements/CustomSnackbar";

const CourseOptions = [
  { value: "Complete Music Theory", label: "Complete Music Theory" },
  {
    value: "Complete Music Production Live Courses",
    label: "Complete Music Production Live Courses",
  },
  {
    value: "One-on-One Music Production Mentorship",
    label: "One-on-One Music Production Mentorship",
  },
];

const dayOptions = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];

const CourseDetails = ({
  formData,
  setFormData,
  setNext,
  onSubmit,
  snackbar,
  setSnackbar,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "plan_type" || name === "choice_of_course") {
      calculateTotalPrice(); // Recalculate when plan or course changes
    }
  };

  // const handleCourseSelect = (courseId) => {
  //   setSelectedCourses((prevSelected) =>
  //     prevSelected.includes(courseId)
  //       ? prevSelected.filter((id) => id !== courseId)
  //       : [...prevSelected, courseId]
  //   );
  // };
  const handleCourseSelect = (courseId) => {
    setFormData((prevData) => {
      const isAlreadySelected = prevData.course_enroll.includes(courseId);
      const updatedEnroll = isAlreadySelected
        ? prevData.course_enroll.filter((id) => id !== courseId)
        : [...prevData.course_enroll, courseId];

      return {
        ...prevData,
        course_enroll: updatedEnroll,
      };
    });
  };

  const calculateTotalPrice = () => {
    const planType = formData.plan_type ? formData.plan_type : "Monthly"; // Ensure it's lowercase

    const total = formData?.course_enroll?.reduce((total, id) => {
      const course = coursePriceList.find((course) => course.id === id);
      const price = course?.price[planType];

      return total + (price ? Number(price) : 0);
    }, 0);
    setFormData((prev) => ({
      ...prev,
      total_amount: total,
    }));
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [formData.plan_type, formData.course_enroll]);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  // const handleSubmit = () => {
  //   if (!checked) {
  //     Alert("You must agree to the terms & conditions!");
  //     return;
  //   }
  //   Alert("Form submitted successfully!");
  // };

  const handleSubmit = () => {
    if (!formData.plan_type) {
      return setSnackbar({
        open: true,
        message: "Please select a plan type.",
        severity: "error",
      });
    }

    if (!formData.learning_duration) {
      return setSnackbar({
        open: true,
        message: "Please select a learning duration.",
        severity: "error",
      });
    }

    if (!formData.preferred_day || formData.preferred_day.length === 0) {
      return setSnackbar({
        open: true,
        message: "Please select at least one preferred day.",
        severity: "error",
      });
    }

    if (!formData.choice_of_course || formData.choice_of_course.length === 0) {
      return setSnackbar({
        open: true,
        message: "Please select at least one course choice.",
        severity: "error",
      });
    }

    if (formData?.course_enroll?.length === 0) {
      return setSnackbar({
        open: true,
        message: "Please select at least one course to enroll in.",
        severity: "error",
      });
    }

    if (!checked) {
      return setSnackbar({
        open: true,
        message: "You must agree to the terms & conditions.",
        severity: "error",
      });
    }

    // All good
    // setSnackbar({
    //   open: true,
    //   message: "Form submitted successfully!",
    //   severity: "success",
    // });

    // Submit to parent
    onSubmit();
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: "6px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          // p: 5,
          p: { xl: 5, md: 4, sm: 4, xs: 1 },
          pb: { xl: 2, md: 2, sm: 2, xs: 1 },
          // pl: 6, pr: 6
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            // mt: 1,
            mb: 1,
            fontSize: "50px",
            // color: "white",
            fontWeight: "bold",
            color: "#555555",
          }}
        >
          Course <span style={{ color: "#DC2106" }}>Details</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            whiteSpace: "normal",
            mb: 3.5,
            color: "#555555",
            fontWeight: "400",
            fontSize: "15px",
            wordSpacing: "2px",
            lineHeight: "25px",
          }}
        >
          Register for our music tutorship program and become a student at our
          school.<br></br> Fill out the form below to start your musical
          journey with us.
        </Typography>

        <Grid container spacing={1} justifyContent={"center"}>
          <Grid spacing={1} size={{ xs: 12, md: 12, lg: 12 }}>
            <Box sx={{ p: 2, borderRadius: "6px", pb: 0 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }}>
                  <CustomFormLabel htmlFor="ft-fname">
                    Select Your Plan
                  </CustomFormLabel>
                  <Box>
                    <CustomPlanSelector
                      value={formData.plan_type || "Monthly"}
                      onChange={(plan) => handleChange("plan_type", plan)}
                    />
                  </Box>
                  <Box display="flex" mt={2} alignItems="center">
                    <ErrorOutlineIcon
                      sx={{
                        fontSize: 18,
                        color: "#555555",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "400", fontSize: "13px", ml: 0.5 }}
                    >
                      Enroll for 1 Year & Get 20% Off!
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }} item>
                  <CustomFormLabel htmlFor="ft-district">
                    Learning Duration
                  </CustomFormLabel>
                  <CustomSingleSelect
                    //  options={CourseOptions}
                    value={formData.learning_duration}
                    onChange={(e) => {
                      handleChange("learning_duration", e);
                    }}
                  />

                  <Box display="flex" mt={2} alignItems="center">
                    <ErrorOutlineIcon
                      sx={{
                        fontSize: 18,
                        color: "#555555",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "400", fontSize: "14px", ml: 0.5 }}
                    >
                      Enroll for 3 Month & Get 20% Off!
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }} item>
                  <CustomFormLabel htmlFor="ft-dob">
                    Preferred day for classes
                  </CustomFormLabel>
                  <CustomMultiSelect
                    placeholder={"Select day for classes"}
                    options={dayOptions}
                    value={formData.preferred_day}
                    onChange={(e) => {
                      handleChange("preferred_day", e);
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }}>
                  <CustomFormLabel htmlFor="ft-dob">
                    Choice of course’s
                  </CustomFormLabel>
                  <CustomMultiSelect
                    placeholder={"Select choice"}
                    options={CourseOptions}
                    value={formData.choice_of_course}
                    onChange={(e) => {
                      handleChange("choice_of_course", e);
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid size={{ xs: 12 }}>
              <CustomFormLabel
                sx={{ p: 2, pb: 0, pt: 0, fontWeight: "bold", mt: 2 }}
                htmlFor="ft-fname"
              >
                Choose Course
              </CustomFormLabel>
            </Grid>
            <Grid
              container
              spacing={3}
              mb={3}
              mt={1}
              justifyContent="space-around"
            >
              {coursePriceList.map((course) => {
                return (
                  <Grid item xs={8} sm={6} md="auto" key={course.id}>
                    <Card
                      sx={{
                        position: "relative",
                        height: { xs: "auto", sm: "auto", md: "230px" },
                        width: { xs: "auto", sm: "auto", md: "250px" },
                        overflow: "hidden",
                        backgroundColor: "red",
                        borderRadius: "10px",
                        transition:
                          "box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out",
                        border: formData?.course_enroll?.includes(course.id)
                          ? "5px solid #DC2106"
                          : "none",
                        "&:hover": {
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Box sx={{ position: "relative", height: "100%" }}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={course.image}
                          alt={course.title}
                          sx={{ width: "100%", objectFit: "cover" }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(180deg, rgba(102, 102, 102, 0) -9.23%, rgba(0, 0, 0, 0.83) 59.69%)",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: 2,
                          color: "white",
                          alignItems: "flex-start",
                        }}
                      >
                        <Checkbox
                          checked={formData?.course_enroll?.includes(course.id)}
                          onChange={() => handleCourseSelect(course.id)}
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "white",
                            "&.Mui-checked": {
                              color: "primary.main",
                            },
                          }}
                        />
                        <Typography
                          variant="h6"
                          textAlign="start"
                          sx={{
                            fontWeight: "bold",
                            maxWidth: "95%",
                            lineHeight: "22px",
                            fontSize: "14px",
                          }}
                        >
                          {course.title}
                        </Typography>
                        <Typography
                          textAlign="start"
                          sx={{ lineHeight: "18px", fontSize: "10px" }}
                          variant="body2"
                        >
                          {course.subtitles}
                        </Typography>
                        <Typography
                          textAlign="start"
                          sx={{
                            lineHeight: "20px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            mt: 1,
                            color: "primary.main",
                          }}
                          variant="h6"
                        >
                          {/* {course.price} INR */}
                          {new Intl.NumberFormat("en-IN").format(
                            course?.price?.[formData?.plan_type]
                          )}{" "}
                          INR
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>

            <Grid
              p={2}
              pt={0.5}
              pb={0}
              container
              spacing={2}
              alignItems="center"
            >
              <Grid
                item
                size={{ xs: 6 }}
                container
                spacing={1}
                alignItems="center"
              >
                <Grid item size={{ xs: 5.5 }}>
                  <CustomTextField
                    name="coupon"
                    placeholder="Enter coupon code"
                    fullWidth
                    // value={formData.name} onChange={handleChange}
                  />
                  {/* <TextField fullWidth variant="outlined" placeholder="Enter value" /> */}
                </Grid>
                <Grid item>
                  <Button
                    sx={{ height: "42px", ml: "1px" }}
                    variant="contained"
                    fullWidth
                  >
                    Apply
                  </Button>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 6 }} container justifyContent="flex-end">
                <Typography
                  sx={{
                    color: "#555555",
                    fontWeight: "700",
                    fontSize: "18px",
                    letterSpacing: ".5px",
                    lineHeight: "20px",
                  }}
                  variant="h6"
                >
                  Total INR:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    <Typography
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                    >
                      {formattedPrice}
                      {/* {new Intl.NumberFormat('en-IN').format(totalPrice)} */}
                    </Typography>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            p={2}
            pt={0}
            pb={0}
            size={{ xs: 12 }}
            container
            spacing={2}
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => {
                    setChecked(e.target.checked);
                  }}
                  color="primary"
                />
              }
              label={
                <Typography variant="body1">
                  I agree to the{" "}
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    terms & conditions
                  </span>
                </Typography>
              }
            />
          </Grid>

          <Box
            sx={{
              mt: 0,

              // position: "absolute",
              // top: "60%",
              // left: "50%",
              // transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Button
              sx={{
                p: 1,
                pl: 3,
                pr: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
                color: "#000",
                border: "1px solid #DC2106",
                fontSize: "14px",
                //   fontWeight: "bold",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#DC2106",
                  color: "#fff",
                },
              }}
              startIcon={<ArrowBackIcon />}
              onClick={() => {
                setNext(true);
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{
                p: 1,
                pl: 3,
                pr: 3,
                //   width: "200px",
                //   height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
                backgroundColor: "#DC2106",
                color: "white",
                fontSize: "16px",
                //   fontWeight: "bold",
                "&:hover": {
                  border: "1.5px solid #DC2106",
                  backgroundColor: "transparent",
                  color: "#DC2106",
                },
              }}
              // onClick={handleSubmit}
              // onClick={() => {
              //   onSubmit();
              // }}
              endIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CourseDetails;

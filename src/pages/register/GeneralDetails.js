import { Box, Button, Grid, Typography } from "@mui/material";
import CustomFormLabel from "../../components/form-elements/CustomFormLabel";
import CustomTextField from "../../components/form-elements/CustomTextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GeneralDetails = ({
  formData,
  setFormData,
  setNext,
  snackbar,
  setSnackbar,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const { name, dob, district, mobile, postal, state, email, address } =
      formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile starting from 6-9, 10 digits
    const postalRegex = /^\d{6}$/;

    if (!name || name.trim() === "") {
      showError("Full Name is required");
      return false;
    }

    if (!dob) {
      showError("Date of Birth is required");
      return false;
    }

    if (!district || district.trim() === "") {
      showError("District is required");
      return false;
    }

    if (!mobile || !mobileRegex.test(mobile)) {
      showError("Enter a valid 10-digit mobile number starting from 6-9");
      return false;
    }

    if (!postal || !postalRegex.test(postal)) {
      showError("Enter a valid 6-digit postal code");
      return false;
    }

    if (!state || state.trim() === "") {
      showError("State is required");
      return false;
    }

    if (!email || !emailRegex.test(email)) {
      showError("Enter a valid email address");
      return false;
    }

    if (!address || address.trim() === "") {
      showError("Address is required");
      return false;
    }

    return true;
  };

  const showError = (message) => {
    setSnackbar({
      open: true,
      message,
      severity: "error",
    });
  };

  const handleNext = () => {
    if (validateForm()) {
      setNext(false);
    }
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
          General <span style={{ color: "#DC2106" }}>Details</span>
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

        <Grid container spacing={0.5} justifyContent={"center"}>
          {/* Column 1 */}
          <Grid
            item
            xs={12}
            sx={{ width: { lg: "32.5%", md: "32%", sm: "100%", xs: "100%" } }}
          >
            <Box sx={{ p: 2, borderRadius: "6px" }}>
              <CustomFormLabel htmlFor="ft-fname">Full Name</CustomFormLabel>
              <CustomTextField
                name="name"
                placeholder="eg: John Doe"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />

              <CustomFormLabel htmlFor="ft-dob" sx={{ mt: 2 }}>
                Date of Birth
              </CustomFormLabel>
              <CustomTextField
                name="dob"
                type="date"
                fullWidth
                value={formData.dob}
                onChange={handleChange}
              />
              <CustomFormLabel htmlFor="ft-fname">District</CustomFormLabel>
              <CustomTextField
                placeholder="Enter District"
                fullWidth
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid
            item
            xs={12}
            sx={{ width: { lg: "32.5%", md: "32%", sm: "100%", xs: "100%" } }}
          >
            <Box sx={{ p: 2, borderRadius: "6px" }}>
              <CustomFormLabel htmlFor="ft-fname">
                Mobile number
              </CustomFormLabel>
              <CustomTextField
                placeholder="987654321"
                fullWidth
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />

              <CustomFormLabel htmlFor="ft-dob" sx={{ mt: 2 }}>
                Postal / Zip code
              </CustomFormLabel>
              <CustomTextField
                fullWidth
                placeholder="Enter Postal / Zip code"
                name="postal"
                value={formData.postal}
                onChange={handleChange}
              />
              <CustomFormLabel htmlFor="ft-fname">State</CustomFormLabel>
              <CustomTextField
                placeholder="Enter state"
                fullWidth
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid
            item
            xs={12}
            sx={{ width: { lg: "32.5%", md: "32%", sm: "100%", xs: "100%" } }}
          >
            <Box sx={{ p: 2, borderRadius: "6px" }}>
              <CustomFormLabel htmlFor="ft-fname">Email</CustomFormLabel>
              <CustomTextField
                placeholder="eg: john@email.com "
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <CustomFormLabel htmlFor="ft-dob" sx={{ mt: 2 }}>
                Address{" "}
              </CustomFormLabel>
              <CustomTextField
                placeholder="Enter area and street"
                multiline
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Box>
          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              p: 1,
              pl: 3,
              pr: 3,

              display: "flex",
              alignSelf: "center",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
            // onClick={()=>{setNext(false)}}
            onClick={handleNext}
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralDetails;

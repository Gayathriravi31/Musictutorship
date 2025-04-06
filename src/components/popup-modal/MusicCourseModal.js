import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomFormLabel from "../form-elements/CustomFormLabel";
import CustomTextField from "../form-elements/CustomTextField";
import SuccessModal from "./SuccessModal";
import { bookUsersEnquiriesAPI } from "../../services/auth.service";

const MusicCourseModal = ({ open, handleClose, onSubmit }) => {
  const [errors, setErrors] = useState({
    name: null,
    mobile: null,
    email: null,
    dob: null,
    courses: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    courses: {
      course1: false,
      course2: false,
      course3: false,
    },
  });

  const handleChange = (name, value) => {
    // const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      courses: {
        ...prevState.courses,
        [name]: checked,
      },
    }));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const hanedleSubmit = async () => {
    const selectedCourses = Object.keys(formData.courses)
      .filter((courseKey) => formData.courses[courseKey])
      .map((courseKey) => {
        switch (courseKey) {
          case "course1":
            return "Complete music theory live course";
          case "course2":
            return "Music production live course";
          case "course3":
            return "One-on-one music production mentorship";
          default:
            return "";
        }
      });

    if (selectedCourses.length === 0) {
      console.log("Please select at least one course.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      message: "test",
      phone_number: Number(formData.mobile),
      // dob: formData.dob,
      dob: formatDate(formData.dob),

      // interested_courses: selectedCourses,
      interested_courses: ["Music Production live course"],
    };

    console.log("Form Submitted", payload);
    try {
      let { data } = await bookUsersEnquiriesAPI(payload);
      console.log(data, "data form book user enquiries");
      // handleClose();
      // onSubmit();
    } catch (e) {
      console.log(e, "error");
      console.error(e, "error");
    }
  };

  const handleSubmit = async () => {
    const { name, mobile, email, dob } = formData;

    let hasError = false;

    const newErrors = {
      name: null,
      mobile: null,
      email: null,
      dob: null,
      courses: null,
    };

    if (!name.trim()) {
      newErrors.name = "Please enter your full name";
      hasError = true;
    }

    if (!mobile || mobile.length !== 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (!dob) {
      newErrors.dob = "Please select your date of birth";
      hasError = true;
    }

    const selectedCourses = Object.keys(formData.courses).filter(
      (key) => formData.courses[key]
    );
    if (selectedCourses.length === 0) {
      newErrors.courses = "Please select at least one course";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    const payload = {
      name: name.trim(),
      email,
      message: "test",
      phone_number: Number(mobile),
      dob: formatDate(dob),
      interested_courses: selectedCourses.map((key) => {
        switch (key) {
          case "course1":
            return "Complete music theory live course";
          case "course2":
            return "Music production live course";
          case "course3":
            return "One-on-one music production mentorship";
          default:
            return "";
        }
      }),
    };

    try {
      const { data } = await bookUsersEnquiriesAPI(payload);
      console.log(data, "data from book user enquiries");
      if (data?.success) {
        handleClose();
        onSubmit();
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 3,
          pt: 1.5,

          borderRadius: "20px",
          width: 400,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "-2%" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <CustomFormLabel sx={{ mt: 0, fontWeight: "600" }} htmlFor="ft-fname">
          Full Name
        </CustomFormLabel>
        <CustomTextField
          name="name"
          placeholder="eg: John Doe"
          fullWidth
          value={formData.name}
          // onChange={handleChange}
          onChange={(e) => {
            const { name, value } = e.target;
            handleChange("name", value);
          }}
        />
        {errors?.name && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0" }}>
            {errors?.name}
          </p>
        )}
        <CustomFormLabel sx={{ mt: 1, fontWeight: "600" }} htmlFor="ft-fname">
          Mobile number
        </CustomFormLabel>
        <CustomTextField
          placeholder="9876543210"
          fullWidth
          name="mobile"
          value={formData.mobile}
          onChange={(e) => {
            const { name, value } = e.target;
            const onlyNums = value.replace(/[^0-9]/g, "");
            handleChange("mobile", onlyNums);
          }}
          inputProps={{
            maxLength: 10,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
        {errors?.mobile && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0" }}>
            {errors?.mobile}
          </p>
        )}

        <CustomFormLabel sx={{ mt: 1, fontWeight: "600" }} htmlFor="ft-fname">
          Email
        </CustomFormLabel>
        <CustomTextField
          placeholder="eg: john@email.com "
          fullWidth
          name="email"
          value={formData.email}
          // onChange={handleChange}
          onChange={(e) => {
            const { name, value } = e.target;
            handleChange("email", value);
          }}
        />
        {errors?.email && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0" }}>
            {errors?.email}
          </p>
        )}

        <CustomFormLabel htmlFor="ft-dob" sx={{ mt: 1, fontWeight: "600" }}>
          Date of Birth
        </CustomFormLabel>
        <CustomTextField
          name="dob"
          type="date"
          fullWidth
          value={formData.dob}
          onChange={(e) => {
            const { name, value } = e.target;
            handleChange("dob", value);
          }}
          // onChange={handleChange}
        />
        {errors?.dob && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0" }}>
            {errors?.dob}
          </p>
        )}

        <Box sx={{ marginTop: 2 }}>
          {/* <h3>Are you interested in?</h3> */}
          <CustomFormLabel sx={{ mt: 1, fontWeight: "600" }} htmlFor="ft-fname">
            Are you interested in?
          </CustomFormLabel>
          <FormControlLabel
            control={
              <Checkbox
                name="course1"
                checked={formData.courses.course1}
                onChange={handleCheckboxChange}
              />
            }
            label="Complete music theory live course"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="course2"
                checked={formData.courses.course2}
                onChange={handleCheckboxChange}
              />
            }
            label="Music production live course"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="course3"
                checked={formData.courses.course3}
                onChange={handleCheckboxChange}
              />
            }
            label="One-on-one music production mentorship"
          />
        </Box>
        {errors?.courses && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0" }}>
            {errors?.courses}
          </p>
        )}

        <Box sx={{ marginTop: 2, textAlign: "center" }}>
          <Button
            sx={{ p: 4, pt: 1.2, pb: 1.2 }}
            variant="contained"
            // onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MusicCourseModal;

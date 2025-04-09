import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import SuccessIcon from "../../assets/svg/SuccessIcon";

const SuccessModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 2,
          pl: 2, pr: 2,
          borderRadius: '20px',
          textAlign: "center",
          width: 260,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <SuccessIcon />
        {/* <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 1 }} /> */}

        <Typography fontSize={'20px'} mt={.2} fontWeight="700" color="#397E3E">
          Success!
        </Typography>
        <Typography sx={{ color: '#333333', fontWeight: '400', fontSize: '14px' }} mt={1}>
          Your message has been sent successfully. Our team will reach you
          shortly.
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;

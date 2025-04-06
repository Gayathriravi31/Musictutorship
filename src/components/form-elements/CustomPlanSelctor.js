import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CustomPlanSelector = ({ value, onChange }) => {
  const options = ["Monthly", "Quarterly", "Annually"];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "5px",
        overflow: "hidden",
        height: "45px",
      }}
    >
      {/* Sliding Indicator */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left:
            value === "Monthly"
              ? "0%"
              : value === "Quarterly"
              ? "33.33%"
              : "66.66%",
          width: "33.33%",
          height: "100%",
          backgroundColor: "primary.main",
          borderRadius: "6px",
          transition: "left 0.3s ease",
          zIndex: -1,
        }}
      />

      {options.map((option) => (
        <Button
          key={option}
          onClick={() => onChange(option)}
          sx={{
            flex: 1,
            padding: "7px 10px",
            borderRadius: "10px",
            color: value === option ? "white" : "primary.main",
            backgroundColor: value === option ? "primary.main" : "transparent",
            "&:hover": {
              backgroundColor:
                value === option ? "primary.dark" : "transparent",
            },
            transition: "color 0.3s ease, background-color 0.3s ease",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {option}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default CustomPlanSelector;

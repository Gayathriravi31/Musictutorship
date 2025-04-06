import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

export default function CustomMultiSelect({
  options,
  value,
  onChange,
  placeholder = "",
}) {
  // Handle selection change
  const handleChange = (event) => {
    const { value: selectedValues } = event.target;
    onChange(
      typeof selectedValues === "string"
        ? selectedValues.split(",")
        : selectedValues
    );
  };

  const MenuProps = {
    PaperProps: {
      style: {
        // borderRadius: '6px',
        maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
        borderRadius: "10px",
        marginTop: "5px",
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar
        },
      },
    },
  };

  return (
    <FormControl sx={{ width: "100%", height: "45px" }}>
      <Select
        multiple
        displayEmpty
        value={value}
        placeholder="Select user"
        onChange={handleChange}
        sx={{
          maxHeight: "45px",
          color: value?.length ? "#000" : "#888888",
          textAlign: "start",
        }}
        renderValue={
          (selected) =>
            selected.length > 0
              ? selected
                  .map(
                    (selectedValue) =>
                      options.find((opt) => opt.value === selectedValue)?.label
                  )
                  .join(", ")
              : placeholder || "Select an option" // Use placeholder if available, else default text
        }
        MenuProps={MenuProps}
      >
        {options.map(({ value: optionValue, label }, index) => (
          <MenuItem
            sx={{
              borderBottom:
                index !== options.length - 1 ? "1px solid #ddd" : "none",
            }}
            key={optionValue}
            value={optionValue}
          >
            <Checkbox sx={{ mr: 1.5 }} checked={value.includes(optionValue)} />
            <ListItemText
              sx={{
                color: "#333333",
                maxWidth: "220px",
                wordBreak: "break-word", // Prevents long words from overflowing
                whiteSpace: "normal", // Ensures multi-line wrapping
              }}
              primary={label}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

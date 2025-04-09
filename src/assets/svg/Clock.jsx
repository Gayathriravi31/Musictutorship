import React from "react";

const ClockIcon = (props) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // To allow passing additional props like className, style, etc.
  >
    <path
      d="M17 31.1654C24.824 31.1654 31.1667 24.8227 31.1667 16.9987C31.1667 9.17466 24.824 2.83203 17 2.83203C9.17596 2.83203 2.83333 9.17466 2.83333 16.9987C2.83333 24.8227 9.17596 31.1654 17 31.1654Z"
      stroke="#DC2106"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8.5V17L22.6667 19.8333"
      stroke="#DC2106"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ClockIcon;

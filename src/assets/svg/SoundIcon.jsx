import React from "react";

// Custom Icon Component
const SoundIcon = () => (
  <svg
    width="136"
    height="135"
    viewBox="0 0 136 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_445_2550)">
      <rect x="36" y="19" width="64" height="64" rx="16.8263" fill="#DC2106" />
      <path
        d="M55.5 49.6654V52.332M59.5 45.6654V56.332M63.5 48.332V53.6654M67.5 44.332V57.6654M71.5 40.332V61.6654M75.5 46.9987V54.9987M79.5 49.6654V52.332"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_445_2550"
        x="0.945229"
        y="0.771519"
        width="134.11"
        height="134.11"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="16.8263" />
        <feGaussianBlur stdDeviation="17.5274" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0.0470588 0 0 0 0 0.219608 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_445_2550"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_445_2550"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SoundIcon;

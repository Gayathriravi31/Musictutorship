import React from "react";

const BookIcon = () => (
  <svg
    width="135"
    height="135"
    viewBox="0 0 135 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_452_3855)">
      <rect
        x="35.5"
        y="19"
        width="64"
        height="64"
        rx="16.8263"
        fill="#DC2106"
      />

      {/* Left Rectangle Path */}
      <path
        d="M53.8334 39.25H62.3334C63.8363 39.25 65.2776 39.847 66.3403 40.9097C67.403 41.9724 68 43.4138 68 44.9167V64.75C68 63.6228 67.5523 62.5418 66.7552 61.7448C65.9582 60.9478 64.8772 60.5 63.75 60.5H53.8334V39.25Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Rectangle Path */}
      <path
        d="M82.1667 39.25H73.6667C72.1638 39.25 70.7224 39.847 69.6597 40.9097C68.597 41.9724 68 43.4138 68 44.9167V64.75C68 63.6228 68.4478 62.5418 69.2448 61.7448C70.0418 60.9478 71.1228 60.5 72.25 60.5H82.1667V39.25Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_452_3855"
        x="0.445229"
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
          result="effect1_dropShadow_452_3855"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_452_3855"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BookIcon;

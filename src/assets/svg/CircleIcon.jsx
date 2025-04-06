import React from "react";

const CircleIcon = () => (
  <svg
    width="136"
    height="135"
    viewBox="0 0 136 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_452_3896)">
      <rect x="36" y="19" width="64" height="64" rx="16.8263" fill="#DC2106" />

      {/* Outer Circle */}
      <path
        d="M68 65.1654C75.8241 65.1654 82.1667 58.8227 82.1667 50.9987C82.1667 43.1747 75.8241 36.832 68 36.832C60.176 36.832 53.8334 43.1747 53.8334 50.9987C53.8334 58.8227 60.176 65.1654 68 65.1654Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Circle */}
      <path
        d="M68 59.5C72.6944 59.5 76.5 55.6944 76.5 51C76.5 46.3056 72.6944 42.5 68 42.5C63.3056 42.5 59.5 46.3056 59.5 51C59.5 55.6944 63.3056 59.5 68 59.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dot */}
      <path
        d="M68 53.8346C69.5648 53.8346 70.8333 52.5661 70.8333 51.0013C70.8333 49.4365 69.5648 48.168 68 48.168C66.4352 48.168 65.1666 49.4365 65.1666 51.0013C65.1666 52.5661 66.4352 53.8346 68 53.8346Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_452_3896"
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
          result="effect1_dropShadow_452_3896"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_452_3896"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default CircleIcon;

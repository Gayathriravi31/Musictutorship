import React from "react";

const GlobeIcon = () => (
  <svg
    width="135"
    height="136"
    viewBox="0 0 135 136"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_452_3877)">
      <rect
        x="35.5"
        y="20"
        width="64"
        height="64"
        rx="16.8263"
        fill="#DC2106"
      />

      {/* Circle Path */}
      <path
        d="M67.9999 66.1654C75.824 66.1654 82.1666 59.8227 82.1666 51.9987C82.1666 44.1747 75.824 37.832 67.9999 37.832C60.1759 37.832 53.8333 44.1747 53.8333 51.9987C53.8333 59.8227 60.1759 66.1654 67.9999 66.1654Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Horizontal Line */}
      <path
        d="M53.8333 52H82.1666"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Double Circle Path */}
      <path
        d="M67.9999 37.832C71.5434 41.7114 73.5572 46.7457 73.6666 51.9987C73.5572 57.2517 71.5434 62.286 67.9999 66.1654C64.4564 62.286 62.4427 57.2517 62.3333 51.9987C62.4427 46.7457 64.4564 41.7114 67.9999 37.832Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_452_3877"
        x="0.445229"
        y="0.945229"
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
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="17.5274" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0.0470588 0 0 0 0 0.219608 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_452_3877"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_452_3877"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GlobeIcon;

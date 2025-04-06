import React from "react";

const BoxIcon = () => (
  <svg
    width="135"
    height="135"
    viewBox="0 0 135 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_449_3264)">
      <rect
        x="35.5"
        y="19"
        width="64"
        height="64"
        rx="16.8263"
        fill="#DC2106"
      />

      {/* First Diagonal Line */}
      <path
        d="M74.375 48.3173L61.625 40.9648"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Diamond Shape */}
      <path
        d="M80.75 57.6664V46.333C80.7495 45.8362 80.6183 45.3482 80.3697 44.918C80.121 44.4878 79.7636 44.1306 79.3333 43.8822L69.4167 38.2155C68.9859 37.9669 68.4974 37.8359 68 37.8359C67.5026 37.8359 67.0141 37.9669 66.5833 38.2155L56.6667 43.8822C56.2364 44.1306 55.879 44.4878 55.6303 44.918C55.3817 45.3482 55.2505 45.8362 55.25 46.333V57.6664C55.2505 58.1632 55.3817 58.6512 55.6303 59.0814C55.879 59.5116 56.2364 59.8688 56.6667 60.1172L66.5833 65.7839C67.0141 66.0325 67.5026 66.1635 68 66.1635C68.4974 66.1635 68.9859 66.0325 69.4167 65.7839L79.3333 60.1172C79.7636 59.8688 80.121 59.5116 80.3697 59.0814C80.6183 58.6512 80.7495 58.1632 80.75 57.6664Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Triangle */}
      <path
        d="M55.6325 44.8594L68 52.0135L80.3675 44.8594"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Vertical Line */}
      <path
        d="M68 66.28V52"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_449_3264"
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
          result="effect1_dropShadow_449_3264"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_3264"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BoxIcon;

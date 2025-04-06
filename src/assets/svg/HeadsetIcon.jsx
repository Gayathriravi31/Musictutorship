import React from "react";

const HeadsetIcon = () => (
  <svg
    width="135"
    height="135"
    viewBox="0 0 135 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_449_3071)">
      <rect
        x="35.5"
        y="19"
        width="64"
        height="64"
        rx="16.8263"
        fill="#DC2106"
      />

      {/* Heart Shape Path */}
      <path
        d="M54.25 59.5V51C54.25 47.6185 55.5933 44.3755 57.9844 41.9844C60.3755 39.5933 63.6185 38.25 67 38.25C70.3815 38.25 73.6245 39.5933 76.0156 41.9844C78.4067 44.3755 79.75 47.6185 79.75 51V59.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Circles (Pills) */}
      <path
        d="M79.75 60.9154C79.75 61.6668 79.4515 62.3875 78.9201 62.9188C78.3888 63.4502 77.6681 63.7487 76.9167 63.7487H75.5C74.7486 63.7487 74.0279 63.4502 73.4965 62.9188C72.9652 62.3875 72.6667 61.6668 72.6667 60.9154V56.6654C72.6667 55.9139 72.9652 55.1932 73.4965 54.6619C74.0279 54.1305 74.7486 53.832 75.5 53.832H79.75V60.9154Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.25 60.9154C54.25 61.6668 54.5485 62.3875 55.0799 62.9188C55.6112 63.4502 56.3319 63.7487 57.0833 63.7487H58.5C59.2514 63.7487 59.9721 63.4502 60.5035 62.9188C61.0348 62.3875 61.3333 61.6668 61.3333 60.9154V56.6654C61.3333 55.9139 61.0348 55.1932 60.5035 54.6619C59.9721 54.1305 59.2514 53.832 58.5 53.832H54.25V60.9154Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <filter
        id="filter0_d_449_3071"
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
          result="effect1_dropShadow_449_3071"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_3071"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default HeadsetIcon;

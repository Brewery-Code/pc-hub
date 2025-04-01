import ISVGIconProps from "./ISVGIconProps";

function GoogleIcon({ className, width, height, fill }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        id="Shape"
        rx="0.000000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill={fill}
        fillOpacity="0"
      />
      <path
        id="Path"
        d="M16 8.17C16 7.63 15.95 7.08 15.86 6.55L8.16 6.55L8.16 9.63L12.57 9.63C12.39 10.62 11.8 11.5 10.94 12.06L10.94 14.06L13.57 14.06C15.11 12.67 16 10.62 16 8.17Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M8.16 16C10.36 16 12.22 15.28 13.57 14.06L10.94 12.06C10.2 12.55 9.26 12.83 8.16 12.83C6.03 12.83 4.23 11.42 3.58 9.53L0.87 9.53L0.87 11.59C2.25 14.29 5.08 16 8.16 16Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M3.58 9.53C3.24 8.54 3.24 7.46 3.58 6.46L3.58 4.41L0.87 4.41C-0.3 6.66 -0.3 9.33 0.87 11.58L3.58 9.53Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M8.16 3.16C9.33 3.14 10.45 3.57 11.29 4.36L13.62 2.07C12.14 0.72 10.19 -0.03 8.16 0C5.08 0 2.25 1.71 0.87 4.41L3.58 6.47C4.23 4.57 6.03 3.16 8.16 3.16Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default GoogleIcon;

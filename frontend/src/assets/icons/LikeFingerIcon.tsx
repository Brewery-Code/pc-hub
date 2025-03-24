import ISVGIconProps from "./ISVGIconProps";

function LikeFingerIcon({ className, width, height, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M6.23 8.41L3.98 8.41C3.58 8.41 3.2 8.57 2.92 8.85C2.64 9.13 2.48 9.51 2.48 9.91L2.48 15.16C2.48 15.56 2.64 15.94 2.92 16.22C3.2 16.5 3.58 16.66 3.98 16.66L6.23 16.66L14.69 16.66C15.06 16.66 15.41 16.54 15.68 16.3C15.96 16.07 16.14 15.74 16.19 15.39L17.23 8.64C17.26 8.42 17.25 8.2 17.19 7.99C17.13 7.78 17.02 7.59 16.88 7.43C16.74 7.26 16.56 7.13 16.36 7.04C16.16 6.95 15.95 6.91 15.73 6.91L11.48 6.91L11.48 3.91C11.48 3.31 11.25 2.74 10.83 2.32C10.4 1.9 9.83 1.66 9.23 1.66L6.23 8.41L6.23 16.66"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.349982"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LikeFingerIcon;

import ISVGIconProps from "./ISVGIconProps";

function SendIcon({ className, width, height, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M11 1L23 1"
        fill="none"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="vector"
        d="M15.3 23L10.89 13.09L1 8.69L23 1L15.3 23Z"
        fill="none"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SendIcon;

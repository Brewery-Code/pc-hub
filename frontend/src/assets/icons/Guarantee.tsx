import ISVGIconProps from "./ISVGIconProps";

function Guarantee({ className, width, height }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        id="White / shield on"
        rx="0.000000"
        width="31.000000"
        height="31.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <rect
        id="Shape"
        rx="0.000000"
        width="23.000000"
        height="23.000000"
        transform="translate(4.500000 4.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <path
        id="vector"
        d="M24 16L24 9L16 6L8 9L8 16C8 22 16 26 16 26C16 26 24 22 24 16Z"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Guarantee;

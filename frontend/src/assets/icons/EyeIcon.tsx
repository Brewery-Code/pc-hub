import ISVGIconProps from "./ISVGIconProps";

function EyeIcon({ className, width, height, stroke, onClick }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 16.1641 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M8.08 2.66C12.75 2.66 15.41 8 15.41 8C15.41 8 12.75 13.33 8.08 13.33C3.41 13.33 0.75 8 0.75 8C0.75 8 3.41 2.66 8.08 2.66Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        id="vector"
        d="M8.08 10C6.97 10 6.08 9.1 6.08 8C6.08 6.89 6.97 6 8.08 6C9.18 6 10.08 6.89 10.08 8C10.08 9.1 9.18 10 8.08 10Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default EyeIcon;

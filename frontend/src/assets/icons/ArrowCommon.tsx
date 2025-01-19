import ISVGIconProps from "./ISVGIconProps";

function ArrowCommon({ className, width, height, stroke }: ISVGIconProps) {
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
      <path
        id="vector"
        d="M3.33 8L12.66 8"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="vector"
        d="M8 3.33L12.66 8L8 12.66"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ArrowCommon;

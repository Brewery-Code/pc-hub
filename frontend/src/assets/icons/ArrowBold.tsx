import ISVGIconProps from "./ISVGIconProps";

function ArrowBold({ className, width, height, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14.0078 8.06641"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M1 1L7 7L13 1"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ArrowBold;

import ISVGIconProps from "./ISVGIconProps";
function StarIcon({ className, width, height, fill, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 11 10.5117"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M5.5 0.5L7.04 3.63L10.5 4.13L8 6.57L8.58 10.01L5.5 8.38L2.41 10.01L3 6.57L0.5 4.13L3.95 3.63L5.5 0.5Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
      <path
        id="vector"
        d="M7.04 3.63L10.5 4.13L8 6.57L8.58 10.01L5.5 8.38L2.41 10.01L3 6.57L0.5 4.13L3.95 3.63L5.5 0.5L7.04 3.63Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default StarIcon;

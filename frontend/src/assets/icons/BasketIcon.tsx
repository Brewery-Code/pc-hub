import ISVGIconProps from "./ISVGIconProps";

export default function BasketIcon({
  className,
  width = "16px",
  height = "16px",
  stroke = "rgb(233, 50, 50) ",
  onClick,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M2 4L3.33 4L14 4"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="vector"
        d="M12.66 13.33C12.66 13.68 12.52 14.02 12.27 14.27C12.02 14.52 11.68 14.66 11.33 14.66L4.66 14.66C4.31 14.66 3.97 14.52 3.72 14.27C3.47 14.02 3.33 13.68 3.33 13.33L3.33 4L12.66 4L12.66 13.33ZM5.33 4L5.33 2.66C5.33 2.31 5.47 1.97 5.72 1.72C5.97 1.47 6.31 1.33 6.66 1.33L9.33 1.33C9.68 1.33 10.02 1.47 10.27 1.72C10.52 1.97 10.66 2.31 10.66 2.66L10.66 4"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="vector"
        d="M6.66 7.33L6.66 11.33"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="vector"
        d="M9.33 7.33L9.33 11.33"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

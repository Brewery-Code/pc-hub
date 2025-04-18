import ISVGIconProps from "./ISVGIconProps";

export default function RowViewIcon({
  className,
  width = "42px",
  height = "42px",
  stroke,
  onClick,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip789_27934)">
        <rect
          id="Rectangle 2614"
          x="8.000000"
          y="8.000000"
          rx="2.000000"
          width="6.000000"
          height="5.999999"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="vector"
          d="M17.25 11L33.5 11"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <rect
          id="Rectangle 2615"
          x="8.000000"
          y="18.000000"
          rx="2.000000"
          width="6.000000"
          height="6.000000"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="vector"
          d="M17.25 21L33.5 21"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <rect
          id="Rectangle 2615"
          x="8.000000"
          y="28.000000"
          rx="2.000000"
          width="6.000000"
          height="6.000000"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="vector"
          d="M17.25 31L33.5 31"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

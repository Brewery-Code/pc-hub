import ISVGIconProps from "./ISVGIconProps";

function PaginatorArrow({ className, width, height, stroke }: ISVGIconProps) {
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
      <g clipPath="url(#clip665_26846)">
        <path
          id="Vector"
          d="M23.28 19.5C21.91 22.72 18.71 25 15 25C10.05 25 6 20.94 6 16C6 11.05 10.05 7 15 7C18.05 7 21.37 8.57 23 11"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinecap="round"
        />
        <path
          id="Vector"
          d="M18 12L23.5 12C23.77 12 24 11.77 24 11.5L24 6"
          stroke={stroke}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default PaginatorArrow;

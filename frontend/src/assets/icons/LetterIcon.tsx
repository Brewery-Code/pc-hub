import ISVGIconProps from "./ISVGIconProps";

export default function LetterIcon({
  className,
  width = "24px",
  height = "24px",
  stroke,
}: ISVGIconProps) {
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
        d="M20 4C21.09 4 22 4.9 22 6L22 18C22 19.09 21.09 20 20 20L4 20C2.9 20 2 19.09 2 18L2 6C2 4.9 2.9 4 4 4L20 4Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
      <path
        id="vector"
        d="M22 6L12 13L2 6"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

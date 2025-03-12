import ISVGIconProps from "./ISVGIconProps";

function Time({ className, width, height }: ISVGIconProps) {
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
      <path
        id="Vector"
        d="M23.73 22.13C21.36 25.22 17.32 26.78 13.37 25.75C8.11 24.38 4.93 18.91 6.32 13.58C7.7 8.26 13.15 5.03 18.41 6.4C21.66 7.24 24.95 10.93 26 13.99"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinecap="round"
      />
      <path
        id="Vector 1"
        d="M14.64 11.36L14.64 16.86L19.86 19.36"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinecap="round"
      />
      <path
        id="Vector"
        d="M20.87 13.24L26.2 14.62C26.46 14.69 26.74 14.53 26.81 14.27L28.19 8.94"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Time;

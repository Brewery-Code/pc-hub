import ISVGIconProps from "./ISVGIconProps";

function CheckMarkAvailability({
  className,
  width,
  height,
  stroke,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22.0762 22.0977"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="vector"
        d="M21.32 10.1L21.32 11.05C21.32 13.27 20.6 15.42 19.27 17.2C17.94 18.98 16.08 20.28 13.95 20.91C11.82 21.53 9.55 21.46 7.47 20.69C5.39 19.92 3.61 18.5 2.4 16.64C1.2 14.78 0.62 12.58 0.77 10.37C0.91 8.15 1.77 6.05 3.21 4.36C4.66 2.67 6.6 1.5 8.77 1.01C10.93 0.52 13.19 0.75 15.22 1.65M21.32 3.33L11.03 13.61L6.75 9.33"
        stroke={stroke}
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default CheckMarkAvailability;

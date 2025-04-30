import ISVGIconProps from "./ISVGIconProps";

export default function PenIcon({
  className,
  width = "12px",
  height = "12px",
  stroke = "#01579B",
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 13.666 13.0098"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M10.66 0.63C10.88 0.54 11.12 0.5 11.35 0.5C11.59 0.5 11.83 0.54 12.05 0.63C12.26 0.71 12.46 0.84 12.63 1C12.8 1.16 12.93 1.34 13.02 1.55C13.11 1.76 13.16 1.98 13.16 2.21C13.16 2.43 13.11 2.65 13.02 2.86C12.93 3.07 12.8 3.26 12.63 3.42L4.01 11.59L0.5 12.5L1.45 9.17L10.08 1C10.25 0.84 10.44 0.71 10.66 0.63Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

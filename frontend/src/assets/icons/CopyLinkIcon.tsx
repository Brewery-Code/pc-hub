import ISVGIconProps from "./ISVGIconProps";

export default function CopyLinkIcon({
  className,
  width = "20px",
  height = "19px",
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
        d="M10.88 12.58C11.28 13.11 11.79 13.55 12.38 13.86C12.96 14.18 13.61 14.37 14.28 14.41C14.94 14.46 15.61 14.37 16.23 14.14C16.86 13.91 17.43 13.54 17.9 13.08L20.69 10.31C21.54 9.44 22.01 8.27 22 7.07C21.98 5.86 21.5 4.7 20.63 3.84C19.77 2.99 18.6 2.5 17.38 2.5C16.16 2.49 14.99 2.95 14.11 3.79L12.51 5.37M13.11 11.41C12.71 10.88 12.2 10.44 11.61 10.13C11.03 9.81 10.38 9.62 9.71 9.58C9.05 9.53 8.38 9.62 7.76 9.85C7.13 10.08 6.56 10.45 6.09 10.91L3.3 13.68C2.45 14.55 1.98 15.72 2 16.92C2.01 18.13 2.5 19.29 3.36 20.15C4.22 21 5.39 21.49 6.61 21.5C7.83 21.5 9 21.04 9.88 20.2L11.47 18.62"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

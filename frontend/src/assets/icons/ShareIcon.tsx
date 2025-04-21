import ISVGIconProps from "./ISVGIconProps";

export default function ShareIcon({
  width,
  height,
  className,
  stroke,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20.667 21.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M16.86 6.83C15.18 6.83 13.81 5.47 13.81 3.79C13.81 2.11 15.18 0.75 16.86 0.75C18.55 0.75 19.91 2.11 19.91 3.79C19.91 5.47 18.55 6.83 16.86 6.83ZM3.79 13.79C2.11 13.79 0.75 12.43 0.75 10.75C0.75 9.06 2.11 7.7 3.79 7.7C5.48 7.7 6.84 9.06 6.84 10.75C6.84 12.43 5.48 13.79 3.79 13.79ZM16.86 20.75C15.18 20.75 13.81 19.38 13.81 17.7C13.81 16.02 15.18 14.66 16.86 14.66C18.55 14.66 19.91 16.02 19.91 17.7C19.91 19.38 18.55 20.75 16.86 20.75ZM6.84 12.05L13.81 16.4M13.81 5.09L6.84 9.44"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

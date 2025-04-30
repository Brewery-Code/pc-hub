import ISVGIconProps from "./ISVGIconProps";

export default function GoogleColorfulIcon({
  className,
  width = "24px",
  height = "24px",
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
        id="Path"
        d="M24 12.26C24 11.45 23.93 10.63 23.79 9.83L12.24 9.83L12.24 14.45L18.86 14.45C18.59 15.93 17.7 17.26 16.41 18.09L16.41 21.09L20.35 21.09C22.67 19.01 24 15.93 24 12.26Z"
        fill="#4285F4"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M12.25 24C15.54 24 18.33 22.93 20.36 21.09L16.41 18.1C15.31 18.83 13.89 19.25 12.25 19.25C9.05 19.25 6.34 17.13 5.37 14.3L1.31 14.3L1.31 17.4C3.38 21.45 7.62 24 12.25 24Z"
        fill="#34A853"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M5.37 14.3C4.86 12.81 4.86 11.2 5.37 9.7L5.37 6.61L1.31 6.61C-0.44 10 -0.44 14 1.31 17.38L5.37 14.3Z"
        fill="#FBBC04"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Path"
        d="M12.25 4.75C14 4.71 15.68 5.36 16.94 6.55L20.44 3.11C18.21 1.08 15.29 -0.04 12.25 0C7.62 0 3.38 2.56 1.31 6.61L5.37 9.71C6.34 6.86 9.05 4.75 12.25 4.75Z"
        fill="#EA4335"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
}

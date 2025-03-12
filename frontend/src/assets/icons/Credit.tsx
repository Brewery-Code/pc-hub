import ISVGIconProps from "./ISVGIconProps";

function Credit({ className, width, height }: ISVGIconProps) {
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
        d="M18.64 21.6L14.75 21.6C14.75 21.6 14.04 21.5 13.84 20.94C13.64 20.37 13.94 20.12 14.2 19.93C14.46 19.75 19.31 17.95 20.96 18.04C22.62 18.14 27.62 20.94 27.62 20.94L25.6 26C25.6 26 22.98 23.92 22.21 23.92C21.45 23.92 15.8 25.81 14.68 25.68C13.58 25.55 5.28 21.52 4.71 20.86C4.31 20.39 4.3 19.96 4.48 19.46C4.66 18.96 5.22 18.52 5.72 18.59C6.17 18.67 12.28 20.67 12.28 20.67"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.400000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="Vector"
        d="M12.5 16.99C9.46 16.99 7 14.53 7 11.49C7 8.45 9.46 5.99 12.5 5.99C15.53 5.99 18 8.45 18 11.49C18 14.53 15.53 16.99 12.5 16.99Z"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.400000"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Credit;

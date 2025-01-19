import ISVGIconProps from "./ISVGIconProps";

function LinkedInIcon({ className, width, height, fill }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M16 9.8L16 16L12.57 16L12.57 10.22C12.57 8.77 12.07 7.78 10.83 7.78C9.88 7.78 9.32 8.44 9.07 9.09C8.98 9.32 8.96 9.64 8.96 9.97L8.96 16L5.53 16C5.53 16 5.57 6.21 5.53 5.2L8.96 5.2L8.96 6.73C8.95 6.74 8.94 6.75 8.93 6.76L8.96 6.76L8.96 6.73C9.41 6 10.23 4.95 12.05 4.95C14.3 4.95 16 6.49 16 9.8ZM1.94 0C0.76 0 0 0.8 0 1.86C0 2.9 0.74 3.73 1.89 3.73L1.91 3.73C3.11 3.73 3.85 2.9 3.85 1.86C3.83 0.8 3.11 0 1.94 0ZM0.2 16L3.63 16L3.63 5.2L0.2 5.2L0.2 16Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default LinkedInIcon;

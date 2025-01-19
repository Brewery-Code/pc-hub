import ISVGIconProps from "./ISVGIconProps";

function FacebookIcon({ className, width, height, fill }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 10 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M6.49 20L6.49 10.87L9.43 10.87L9.87 7.32L6.49 7.32L6.49 5.05C6.49 4.02 6.76 3.32 8.18 3.32L10 3.32L10 0.14C9.68 0.09 8.6 0 7.35 0C4.74 0 2.95 1.65 2.95 4.69L2.95 7.32L0 7.32L0 10.87L2.95 10.87L2.95 20L6.49 20Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default FacebookIcon;

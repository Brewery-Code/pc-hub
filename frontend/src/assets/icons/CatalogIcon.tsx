import ISVGIconProps from "./ISVGIconProps";

function CatalogIcon({
  className,
  fill,
  stroke,
  width,
  height,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        id="Rectangle 292"
        x="0.750000"
        y="13.402344"
        rx="1.000000"
        width="5.846966"
        height="5.846966"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        fillOpacity="0"
      />
      <rect
        id="Rectangle 294"
        x="0.750000"
        y="2.789062"
        rx="1.000000"
        width="5.846966"
        height="5.846966"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        fillOpacity="0"
      />
      <rect
        id="Rectangle 293"
        x="11.363281"
        y="13.402344"
        rx="1.000000"
        width="5.846967"
        height="5.846966"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        fillOpacity="0"
      />
      <path
        id="Rectangle 295"
        d="M9.54 4.87L13.71 0.7C14.1 0.31 14.73 0.31 15.12 0.7L19.29 4.87C19.68 5.26 19.68 5.89 19.29 6.28L15.12 10.44C14.73 10.83 14.1 10.83 13.71 10.44L9.54 6.28C9.15 5.89 9.15 5.26 9.54 4.87ZM14.41 2.12L10.96 5.57L14.41 9.03L17.87 5.57L14.41 2.12Z"
        fillOpacity="1.000000"
        fillRule="evenodd"
        strokeOpacity="0"
      />
    </svg>
  );
}

export default CatalogIcon;

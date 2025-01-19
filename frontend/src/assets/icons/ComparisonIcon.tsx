import ISVGIconProps from "./ISVGIconProps";

function ComparisonIcon({ className, width, height, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector 1"
        d="M12.21 11.54L19.59 29.16C19.59 39.14 4.82 39.14 4.82 29.16L12.21 11.54L33.79 9.78L41.17 27.39C41.17 36.79 26.97 36.79 26.97 27.39L33.79 9.78"
        fill="none"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
      <ellipse
        id="Ellipse 68"
        cx="23.000000"
        cy="10.957031"
        rx="1.135870"
        ry="1.174460"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
      <line
        id="Line 243"
        x1="4.828125"
        y1="29.000000"
        x2="19.593750"
        y2="29.000000"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
      />
      <line
        id="Line 244"
        x1="26.406250"
        y1="27.824219"
        x2="41.171875"
        y2="27.824219"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
      />
    </svg>
  );
}

export default ComparisonIcon;

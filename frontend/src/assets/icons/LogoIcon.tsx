import ISVGIconProps from "./ISVGIconProps";

function LogoIcon({
  fill,
  width,
  height,
  className,
  isIconSmall,
}: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={!isIconSmall ? "0 0 164.234 42" : "0 0 45 42"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {!isIconSmall && (
        <path
          id="Vector"
          d="M35.54 40.31L53.8 40.31L61.93 11.5L43.67 11.5L35.54 40.31ZM41.8 28.44L53.96 28.44L55.66 23.38L43.5 23.38L41.8 28.44Z"
          fill={fill}
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      )}
      <path
        id="Vector"
        d="M12.57 17.9L5.58 20.12L27.73 42L33.19 40.3L43.19 5.15L41.85 0L26.45 3.87L27.32 8.78L36.52 6.46L28.97 35.23L12.57 17.9Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="Vector"
        d="M25.42 23.24L27.25 17.4L16.88 6.25L0.04 10.47L1.3 15.82L14.69 12.07L25.42 23.24Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      {!isIconSmall && (
        <path
          id="Vector"
          d="M56.37 40.31L156.27 40.3L164.23 11.49L64.49 11.49L56.37 40.31ZM138.55 38.03L138.55 13.77L153.48 13.77C161.47 15.78 158.88 29.01 153.48 29.41L146.61 29.45L144.07 26.26L144.07 38.03L138.55 38.03ZM151.4 18.89C153.38 18.82 154.78 23.84 151.4 24.3L144.07 24.23L144.07 18.92L151.4 18.89ZM112.31 38L106.3 38L106.3 13.77L116.64 13.77L121.59 28.47L126.55 13.77L136.9 13.77L136.9 38L130.88 38L130.81 20.05L124.67 38.03L121.59 38.03L118.52 38.03L112.37 20.05L112.31 38ZM105.03 26.94C105.03 29.84 104.13 33.32 102.07 35.2C100.01 37.09 97.32 38.03 94 38.03C90.65 38.03 87.94 37.09 85.85 35.2C83.78 33.32 82.95 29.9 82.95 27L82.95 24.92C82.95 22.03 83.77 18.49 85.84 16.6C87.92 14.71 90.62 13.77 93.96 13.77C97.27 13.77 99.97 14.71 102.05 16.6C104.12 18.49 105.03 21.97 105.03 24.86L105.03 26.94ZM99.05 24.99C99.05 23.3 98.61 21.92 97.72 20.84C96.83 19.76 95.58 19.22 93.96 19.22C92.3 19.22 91.03 19.76 90.16 20.83C89.28 21.9 88.85 23.29 88.85 24.99L88.85 26.72C88.85 28.42 89.29 29.82 90.17 30.9C91.07 31.98 92.34 32.52 94 32.52C95.6 32.52 96.85 31.98 97.73 30.9C98.61 29.82 99.05 28.42 99.05 26.72L99.05 24.99ZM83 38.03L83 32.17L71.51 32.17C69.27 32.17 66.09 22.51 71.51 19.22L80.23 19.16L83.2 13.77L70.54 13.77C62.44 13.51 56.41 34.86 70.54 38.01L83 38.03Z"
          fill={fill}
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      )}
    </svg>
  );
}

export default LogoIcon;
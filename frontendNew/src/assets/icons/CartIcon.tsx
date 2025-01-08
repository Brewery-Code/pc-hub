import ISVGIconProps from "./ISVGIconProps";

function CartIcon({ className, width, height, fill, stroke }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="vector"
        d="M17 35.12C17 36.57 15.82 37.75 14.37 37.75C12.92 37.75 11.75 36.57 11.75 35.12C11.75 33.67 12.92 32.5 14.37 32.5C15.82 32.5 17 33.67 17 35.12Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        id="vector"
        d="M31.25 35.12C31.25 36.57 30.07 37.75 28.62 37.75C27.17 37.75 26 36.57 26 35.12C26 33.67 27.17 32.5 28.62 32.5C30.07 32.5 31.25 33.67 31.25 35.12Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        id="vector"
        d="M4.67 8.5L8.75 8.5L14 24.25M32.96 29.5L12.87 29.5C11.85 29.5 10.98 28.76 10.8 27.75C10.6 26.57 11.41 25.46 12.59 25.3L32.96 22.53C33.76 22.42 34.37 21.78 34.45 20.99L34.83 16.95C34.92 15.99 34.2 15.14 33.23 15.07L10.42 13.48"
        fill="none"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CartIcon;

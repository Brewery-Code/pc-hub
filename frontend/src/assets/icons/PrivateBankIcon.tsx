import ISVGIconProps from "./ISVGIconProps";

function PrivateBankIcon({ className, width, height }: ISVGIconProps) {
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
        d="M0 31.99L12.5 31.99L12.5 19.48L0 19.48L0 31.99Z"
        fill="#373435"
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
      <path
        id="Vector"
        d="M25.38 6.61C25.38 10.86 25.38 21.13 25.38 25.38C24.19 25.38 23.99 25.38 22.83 25.38C21.73 16.1 15.9 10.26 6.62 9.16C6.62 8.01 6.62 7.8 6.62 6.61C10.87 6.61 21.13 6.61 25.38 6.61ZM0.01 0L0.01 15.57L3.31 15.57C12.02 15.57 16.43 19.98 16.43 28.69L16.43 32L31.99 32L31.99 0L0.01 0Z"
        fill="#60B238"
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
    </svg>
  );
}

export default PrivateBankIcon;

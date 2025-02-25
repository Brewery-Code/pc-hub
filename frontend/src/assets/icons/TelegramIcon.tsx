import ISVGIconProps from "./ISVGIconProps";

function TelegramIcon({ className, width, height, fill }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18.3164 15.4316"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M17.14 0.06C17.77 -0.19 18.43 0.36 18.29 1.03L15.43 14.71C15.3 15.35 14.55 15.64 14.02 15.25L9.7 12.08L7.5 14.33C7.11 14.72 6.44 14.56 6.28 14.04L4.69 9L0.43 7.74C-0.13 7.57 -0.16 6.79 0.39 6.58L17.14 0.06ZM15.03 3.09C15.22 2.92 15.01 2.63 14.8 2.76L5.6 8.46C5.44 8.56 5.37 8.76 5.43 8.94L6.68 14.45C6.71 14.53 6.83 14.52 6.83 14.43L7.12 10.24C7.13 10.13 7.18 10.04 7.25 9.97L15.03 3.09Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="nonzero"
        stroke="none"
      />
    </svg>
  );
}

export default TelegramIcon;

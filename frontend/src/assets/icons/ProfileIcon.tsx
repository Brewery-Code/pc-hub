import ISVGIconProps from "./ISVGIconProps";

function ProfileIcon({ stroke, width, height, className }: ISVGIconProps) {
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
        id="vector"
        d="M21 21L21 19C21 17.93 20.52 16.92 19.68 16.17C18.83 15.42 17.69 15 16.5 15L7.5 15C6.3 15 5.16 15.42 4.31 16.17C3.47 16.92 3 17.93 3 19L3 21"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        id="vector"
        d="M12 11C9.78 11 8 9.21 8 7C8 4.78 9.78 3 12 3C14.21 3 16 4.78 16 7C16 9.21 14.21 11 12 11Z"
        stroke={stroke}
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default ProfileIcon;

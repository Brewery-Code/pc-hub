import ISVGIconProps from "./ISVGIconProps";

function SearchIcon({ className, width, height, fill }: ISVGIconProps) {
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
      <path
        id="vector"
        d="M9.16 16.66C13.3 16.66 16.66 13.3 16.66 9.16C16.66 5.02 13.3 1.66 9.16 1.66C5.02 1.66 1.66 5.02 1.66 9.16C1.66 13.3 5.02 16.66 9.16 16.66ZM10.41 14.52C10.01 14.62 9.59 14.66 9.16 14.66C8.73 14.66 8.32 14.62 7.91 14.52C7.61 14.45 7.31 14.35 7.02 14.23C6.72 14.1 6.44 13.95 6.17 13.78C5.85 13.57 5.55 13.33 5.27 13.05C5 12.78 4.76 12.48 4.55 12.16C4.37 11.89 4.22 11.6 4.09 11.3C3.97 11.01 3.87 10.72 3.8 10.41C3.71 10.01 3.66 9.59 3.66 9.16C3.66 8.73 3.71 8.32 3.8 7.91C3.87 7.61 3.97 7.31 4.09 7.02C4.22 6.72 4.37 6.44 4.55 6.17C4.76 5.85 5 5.55 5.27 5.27C5.55 5 5.85 4.76 6.17 4.55C6.44 4.37 6.72 4.22 7.02 4.09C7.31 3.97 7.61 3.87 7.91 3.8C8.32 3.71 8.73 3.66 9.16 3.66C9.59 3.66 10.01 3.71 10.41 3.8C10.72 3.87 11.01 3.97 11.3 4.09C11.6 4.22 11.89 4.37 12.16 4.55C12.48 4.76 12.78 5 13.05 5.27C13.33 5.55 13.57 5.85 13.78 6.17C13.95 6.44 14.1 6.72 14.23 7.02C14.35 7.31 14.45 7.61 14.52 7.91C14.62 8.32 14.66 8.73 14.66 9.16C14.66 9.59 14.62 10.01 14.52 10.41C14.45 10.72 14.35 11.01 14.23 11.3C14.1 11.6 13.95 11.89 13.78 12.16C13.57 12.48 13.33 12.78 13.05 13.05C12.78 13.33 12.48 13.57 12.16 13.78C11.89 13.95 11.6 14.1 11.3 14.23C11.01 14.35 10.72 14.45 10.41 14.52Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
      <path
        id="vector"
        d="M15.28 13.87L18.62 17.2L17.2 18.62L13.87 15.28L15.28 13.87ZM13.9 15.28L13.87 15.28C13.48 14.89 13.48 14.26 13.87 13.87C14.26 13.48 14.89 13.48 15.28 13.87L15.28 13.9L13.9 15.28ZM18.59 17.2L18.62 17.2C19.01 17.6 19.01 18.22 18.62 18.62C18.22 19.01 17.6 19.01 17.2 18.62L17.2 18.59L18.59 17.2Z"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SearchIcon;
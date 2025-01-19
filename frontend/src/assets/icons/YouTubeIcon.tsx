import ISVGIconProps from "./ISVGIconProps";

function YouTubeIcon({ className, width, height, fill }: ISVGIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 14.0039"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Exclude"
        d="M19.5898 2.19141C19.3555 1.33398 18.6836 0.658203 17.8242 0.427734C16.2617 0 10 0 10 0C10 0 3.73828 0 2.17578 0.412109C1.33594 0.642578 0.640625 1.33398 0.410156 2.19141C0 3.75586 0 7.00195 0 7.00195C0 7.00195 0 10.2637 0.410156 11.8125C0.640625 12.668 1.31641 13.3438 2.17578 13.5742C3.75781 14.0039 10 14.0039 10 14.0039C10 14.0039 16.2617 14.0039 17.8242 13.5918C18.6836 13.3613 19.3555 12.6855 19.5898 11.8281C20 10.2637 20 7.01758 20 7.01758C20 7.01758 20.0156 3.75586 19.5898 2.19141ZM13 7.00195L8 10L8 4.00391L13 7.00195Z"
        clipRule="evenodd"
        fill={fill}
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default YouTubeIcon;

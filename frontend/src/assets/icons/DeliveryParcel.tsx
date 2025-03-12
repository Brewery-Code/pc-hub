import ISVGIconProps from "./ISVGIconProps";

function DeliveryParcel({ className, width, height }: ISVGIconProps) {
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
      <rect
        id="Rectangle 2615"
        x="5.000000"
        y="6.324219"
        rx="1.000000"
        width="22.000000"
        height="6.000000"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
      />
      <path
        id="Rectangle 2616"
        d="M25.05 12.73L25.05 24.67C25.05 25.22 24.61 25.67 24.05 25.67L7.94 25.67C7.38 25.67 6.94 25.22 6.94 24.67L6.94 12.73"
        stroke="#01579B"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
      />
      <rect
        id="Rectangle 2614"
        x="12.117188"
        y="16.617188"
        rx="0.647059"
        width="7.764706"
        height="1.294118"
        fill="#01579B"
        fillOpacity="1.000000"
      />
    </svg>
  );
}

export default DeliveryParcel;

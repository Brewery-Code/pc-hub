import { MouseEventHandler } from "react";

interface ISVGIconProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
  hoverColor?: string;
  stroke?: string;
  isIconSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default ISVGIconProps;

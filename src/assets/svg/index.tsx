import React from "react";

import SvgHideOn from "./hide-on.svg";
import SvgHideOff from "./hide-off.svg";
import SvgLogo from "./logo.svg";

export type ImagesList = "hide-on" | "hide-off" | "logo";

interface ImagesProps {
  image: ImagesList;
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const Svg = ({
  image,
  width = 24,
  height = 24,
  color,
  style,
}: ImagesProps): JSX.Element => {
  switch (image) {
    case "hide-on":
      return (
        <SvgHideOn width={width} height={height} fill={color} style={style} />
      );
    case "hide-off":
      return (
        <SvgHideOff width={width} height={height} fill={color} style={style} />
      );
    case "logo":
      return <SvgLogo width={width} height={height} style={style} />;
  }
};

export default Svg;

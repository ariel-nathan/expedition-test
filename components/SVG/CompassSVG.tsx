import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CompassSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-compass"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
    <Path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </Svg>
);

export default CompassSVG;

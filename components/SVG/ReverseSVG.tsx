import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ReverseSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-repeat"
    {...props}
  >
    <Path d="m17 1 4 4-4 4" />
    <Path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" />
    <Path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </Svg>
);

export default ReverseSVG;

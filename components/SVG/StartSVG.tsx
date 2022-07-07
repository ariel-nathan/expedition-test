import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const StartSVG = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={6} cy={6} r={6} fill="#F6C62D" />
    <Path
      d="m3 6 .53-.53 2.095 2.095V3h.75v4.565L8.47 5.47 9 6 6 9 3 6Z"
      fill="#000"
    />
  </Svg>
);

export default StartSVG;

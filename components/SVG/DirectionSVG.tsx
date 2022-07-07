import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DirectionSVG = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.473 7.527-6-6a.664.664 0 0 0-.94 0l-6 6c-.26.26-.26.68 0 .94l6 6c.26.26.68.26.94 0l6-6a.664.664 0 0 0 0-.94Zm-5.14 2.14V8H6.667v2H5.333V7.333c0-.366.3-.666.667-.666h3.333V5l2.334 2.333-2.334 2.334Z"
      fill="#000"
    />
  </Svg>
);

export default DirectionSVG;

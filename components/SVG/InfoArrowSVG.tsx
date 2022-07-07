import * as React from "react";
import Svg, { Path } from "react-native-svg";

const InfoArrowSVG = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 0 4.94 1.06l4.19 4.19H0v1.5h9.13l-4.19 4.19L6 12l6-6-6-6Z"
      fill="#000"
    />
  </Svg>
);

export default InfoArrowSVG;

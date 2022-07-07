import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M22 2 2 22M2 2l20 20" stroke="#000" strokeWidth={3} />
  </Svg>
);

export default SvgComponent;

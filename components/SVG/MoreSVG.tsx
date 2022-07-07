import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MoreSVG = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm0 6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM12 21a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      fill="#000"
    />
  </Svg>
);

export default MoreSVG;

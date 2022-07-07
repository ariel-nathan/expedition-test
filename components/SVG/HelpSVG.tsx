import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HelpSVG = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.5 9h1V8h-1v1ZM6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4Zm0-7a2 2 0 0 0-2 2h1c0-.55.45-1 1-1s1 .45 1 1c0 1-1.5.875-1.5 2.5h1C6.5 6.375 8 6.25 8 5a2 2 0 0 0-2-2Z"
      fill="#F6C62D"
    />
  </Svg>
);

export default HelpSVG;
